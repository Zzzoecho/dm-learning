package com.zoe.dm.rb.infra.persist

import com.zoe.dm.rb.domain.User
import com.zoe.dm.rb.domain.UserRepo
import org.springframework.stereotype.Repository
import java.util.concurrent.atomic.AtomicInteger

/**
 * @author carl
 * @since 2023-02-27 20:33
 **/
@Repository
open class UserRepoMemoryImpl(
    val idsMap: MutableMap<Int, User> = HashMap(16),
    private val idGenerator: AtomicInteger = AtomicInteger(0),

    private val usernameIndex: MutableMap<String, Int> = HashMap(16)
) : UserRepo {
    override fun create(u: User) {
        val newId = idGenerator.incrementAndGet()
        u.id = newId
        idsMap[newId] = u
        usernameIndex[u.username] = newId
    }

    override fun update(u: User) {
        idsMap[u.id!!] = u
    }

    override fun delete(u: User) {
        idsMap.remove(u.id!!)
        usernameIndex.remove(u.username)
    }

    override fun findManyByIds(ids: List<Int>): List<User> =
        ids.mapNotNull {
            idsMap[it]
        }

    override fun findByUsername(username: String): User? {
//        val id = usernameIndex[username]
//
//        return if (id == null) {
//            null
//        } else {
//            idsMap[id]
//        }

        return usernameIndex[username]?.let { idsMap[it] }
    }
}


