package com.zoe.dm.rb

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.cassandra.CassandraAutoConfiguration
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration
import org.springframework.boot.autoconfigure.data.redis.RedisAutoConfiguration
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration
import org.springframework.context.annotation.EnableAspectJAutoProxy

/**
 *<pre>
 * class desc here
 *</pre>
 *@author carl.yu
 *@since 2023/2/28
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

fun main(args: Array<String>) {
    SpringApplication.run(Bootstrap::class.java, *args)
}