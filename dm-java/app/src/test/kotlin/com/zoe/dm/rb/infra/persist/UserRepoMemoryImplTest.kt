package com.zoe.dm.rb.infra.persist

import com.zoe.dm.rb.autotest.eq
import com.zoe.dm.rb.domain.User
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

/**
 * @author carl
 * @since 2023-02-27 20:58
 */
internal class UserRepoMemoryImplTest {
    private val repo = UserRepoMemoryImpl()

    @BeforeEach
    fun setUp() {
        for (i in 1..10) {
            repo.create(
                User(
                    null,
                    "zoe${i}",
                    "nick${i}",
                    "123"
                )
            )
        }

    }

    @Test
    fun `test create`() {
        for (i in 1..10) {
            val inDb = repo.idsMap[i]!!
            inDb.nickname eq "nick${i}"
            inDb.username eq "zoe${i}"
            inDb.password eq "123"
        }
    }


    @Test
    fun `test update`() {
        repo.findManyByIds(listOf(1))[0].let {
            it.nickname = "carl"
            repo.update(it)
        }

        repo.findManyByIds(listOf(1))[0].nickname eq "carl"


        repo.findManyByIds(listOf(1))[0].let {
            it.nickname = "carl"
            repo.update(it)
        }
    }

    @Test
    fun `test delete`() {
        repo.delete(repo.findById(1)!!)
        repo.findById(1) eq null
    }

    @Test
    fun `test findByUsername`() {
        repo.findByUsername("zoe1")!!.id eq 1
    }
}