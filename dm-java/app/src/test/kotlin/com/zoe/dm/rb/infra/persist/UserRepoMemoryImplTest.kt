package com.zoe.dm.rb.infra.persist

import com.zoe.dm.rb.autotest.eq
import com.zoe.dm.rb.domain.User
import com.zoe.dm.rb.domain.UserRepo
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach

import org.junit.jupiter.api.Test

/**
 * <pre>
 * class desc here
</pre> *
 * @author carl.yu
 * @since 2023/2/28
 */
class UserRepoMemoryImplTest {
    private val repo = UserRepoMemoryImpl()

    @BeforeEach
    fun setUp() {
        for (i in 1..4) {
            repo.create(User(null, "zoe${i}", "nick${i}", "123"))
        }
    }

    @Test
    fun create() {
        for (i in 1..4) {
            val user = repo.idsMap[i]!!

            user.username eq "zoe${i}"
            user.nickname eq "nick${i}"
            user.password eq "123"
        }
    }

    @Test
    fun update() {
        repo.findById(1).let {
            if (it != null) {
                it.nickname = "carl"
                repo.update(it)
            }
        }
        repo.findById(1)?.nickname eq "carl"
    }

    @Test
    fun delete() {
        repo.delete(repo.findById(1)!!)
        repo.findById(1) eq null
    }

    @Test
    fun findManyByIds() {
        val res = repo.findManyByIds(listOf(1,3,4)).associateBy { it.id!! }

        res.size eq 3
        res.get(1) eq User(1, "zoe1", "nick1", "123")
    }

    @Test
    fun findByUsername() {
        repo.findByUsername("zoe1")?.id eq 1
    }
}