package com.zoe.dm.it.lang

import org.junit.jupiter.api.Test
import java.util.concurrent.atomic.AtomicInteger

/**
 * @author carl
 * @since 2023-02-27 20:24
 **/
class OopTest {


    @Test
    fun `test data class`() {
        data class U(
            val u: String = "aa",
            val age: Int = 1,
            var id: Int? = null
        )

        println(U())


        val idGenerator = AtomicInteger(0)

        println(idGenerator.incrementAndGet())
    }
}