package com.zoe.dm.rb.domain

/**
 * @author carl
 * @since 2023-02-27 20:22
 **/
data class User(
    /*? 允许为 null*/
    var id: Int? = null,
    val username: String,
    var nickname: String = "",
    var password: String ,
)


/**
 * 和数据库打交道的接口
 */
interface UserRepo {
    fun create(u: User)

    fun update(u: User)

    fun delete(u: User)

    fun findManyByIds(ids: List<Int>): List<User>

    fun findById(id: Int): User? = findManyByIds(listOf(id)).firstOrNull()

    fun findByUsername(username: String): User?
}