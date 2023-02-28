package com.zoe.dm.rb.infra.persist

import com.zoe.dm.rb.domain.User
import com.zoe.dm.rb.domain.UserRepo
import java.util.concurrent.atomic.AtomicInteger

/**
 *<pre>
 * class desc here
 *</pre>
 *@author carl.yu
 *@since 2023/2/28
 **/
open class UserRepoMemoryImpl(
    val idsMap: MutableMap<Int, User> = HashMap(16),
    private val idGenerator: AtomicInteger = AtomicInteger(0),
    private val usernameIndex: MutableMap<String, Int> = HashMap(16),
) : UserRepo {
    override fun create(u: User) {
        val id = idGenerator.incrementAndGet()
        u.id = id
        idsMap[id] = u
        usernameIndex[u.username] = id
    }

    override fun update(u: User) {
        idsMap[u.id!!] = u
    }

    override fun delete(u: User) {
        idsMap.remove(u.id!!)
        usernameIndex.remove(u.username)
    }

    override fun findManyByIds(ids: List<Int>): List<User> {
        val list = ArrayList<User>()
        for (id in ids) {
            idsMap[id]?.let {
                list.add(it)
            }
        }
        return list
    }

    override fun findByUsername(username: String): User? {
        return usernameIndex[username]?.let {
            idsMap[it]
        }
    }

}