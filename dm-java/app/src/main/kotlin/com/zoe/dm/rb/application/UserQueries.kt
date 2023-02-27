package com.zoe.dm.rb.application

import com.zoe.dm.rb.domain.User
import com.zoe.dm.rb.domain.UserRepo
import com.zoe.dm.rb.infra.support.ApiException
import org.springframework.stereotype.Service

/**
 * @author carl
 * @since 2023-02-27 21:56
 **/
@Service
open class FindByIdQueryHandler(
    private val userRepo: UserRepo
) {

    fun query(id: Int): User = userRepo.findById(id) ?: let { throw ApiException("$id not existed") }

}