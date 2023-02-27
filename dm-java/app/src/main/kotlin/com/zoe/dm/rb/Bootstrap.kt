package com.zoe.dm.rb

import com.zoe.dm.rb.infra.support.ApiException
import com.zoe.dm.rb.infra.support.ApiResp
import com.zoe.dm.rb.infra.support.ApiRespCode
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.slf4j.LoggerFactory
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration
import org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration
import org.springframework.context.annotation.EnableAspectJAutoProxy
import org.springframework.core.MethodParameter
import org.springframework.http.MediaType
import org.springframework.http.converter.HttpMessageConverter
import org.springframework.http.server.ServerHttpRequest
import org.springframework.http.server.ServerHttpResponse
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice

/**
 * @author carl
 * @since 2023-02-27 20:15
 **/
@SpringBootApplication(
    exclude = [
        RedisAutoConfiguration::class,
        MongoDataAutoConfiguration::class,
        MongoAutoConfiguration::class,
        CassandraAutoConfiguration::class,
        DataSourceAutoConfiguration::class,
    ]
)
@EnableAspectJAutoProxy
open class Bootstrap

@RestControllerAdvice
open class ExceptionHandler : ResponseBodyAdvice<Any> {

    override fun supports(returnType: MethodParameter, converterType: Class<out HttpMessageConverter<*>>): Boolean {
        return true
    }

    override fun beforeBodyWrite(
        body: Any?,
        returnType: MethodParameter,
        selectedContentType: MediaType,
        selectedConverterType: Class<out HttpMessageConverter<*>>,
        request: ServerHttpRequest,
        response: ServerHttpResponse
    ): Any? {
        return when (body) {
            is ApiResp<*> -> body
            else -> ApiResp(body, ApiRespCode.OK.code, "")
        }
    }


    @ExceptionHandler(Exception::class)
    fun doResolveException(
        request: HttpServletRequest,
        response: HttpServletResponse,
        handler: Any?,
        ex: Exception
    ): ApiResp<Any> {
        logger.error("exception", ex)
        return when (ex) {
            is ApiException -> ApiResp(null, ApiRespCode.PARAMS_ERROR.code, ex.message!!)
            else -> ApiResp(null, ApiRespCode.SERVER_ERROR.code, "server inner error")
        }
    }

    companion object {
        private val logger = LoggerFactory.getLogger(ExceptionHandler::class.java)
    }
}


/**
 * 首先 kotlin 认为 main 方法不属于任何一个类
 */
fun main(args: Array<String>) {
    SpringApplication.run(Bootstrap::class.java, *args)
}