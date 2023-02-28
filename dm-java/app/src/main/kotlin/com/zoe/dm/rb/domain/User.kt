package com.zoe.dm.rb.domain

/**
 *<pre>
 * class desc here
 *</pre>
 *@author carl.yu
 *@since 2023/2/28
 **/
data class User (
    var id: Int?=null,
    val username: String,
    var nickname: String = "",
    var password: String,
)

interface UserRepo {
    fun create(u: User)

    fun update(u: User)

    fun delete(u: User)

    fun findManyByIds(ids: List<Int>): List<User>

    fun findById(id: Int) : User ?= findManyByIds(listOf(id)).firstOrNull()

    fun findByUsername(username: String): User?
}