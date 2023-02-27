package com.zoe.dm.rb.infra.support

/**
 * @author carl
 * @since 2023-02-27 21:29
 **/

interface CommandHandler<REQ, RESP> {
    fun handle(req: REQ): RESP
}


class ApiException(message: String) : RuntimeException(message)


data class ApiResp<T>(
    val data: T?,
    val code: Int,
    val message: String = ""
)


enum class ApiRespCode(val code: Int) {
    OK(2000),
    PARAMS_ERROR(4000),
    SERVER_ERROR(5000)
    ;
}

