package com.zoe.dm.rb.application

import com.zoe.dm.rb.domain.User
import com.zoe.dm.rb.infra.support.ApiException
import com.zoe.dm.rb.infra.support.CommandHandler
import com.zoe.dm.rb.infra.web.CreateForm
import com.zoe.dm.rb.infra.web.UpdateNicknameBody
import org.springframework.stereotype.Service

/**
 * command: 修改 -> mysql
 * query: 查询 -> nosql ...
 * @author carl
 * @since 2023-02-27 21:26
 **/

@Service
open class CreateUserCommandHandler(
    private val userRepo: com.zoe.dm.rb.domain.UserRepo,
) : CommandHandler<CreateForm, Int> {
    override fun handle(req: CreateForm): Int = User(username = req.username, password = req.password).let {
        userRepo.findByUsername(req.username)?.let {
            throw ApiException("username already existed :${req.username}")
        }

        userRepo.create(it)
        it.id!!
    }
}

@Service
open class UpdateNicknameCommandHandler(
    private val userRepo: com.zoe.dm.rb.domain.UserRepo,
) : CommandHandler<Pair<Int, UpdateNicknameBody>, Boolean> {
    override fun handle(req: Pair<Int, UpdateNicknameBody>): Boolean {
        val id = req.first
        val nickname = req.second.nickname


        val user = userRepo.findById(id) ?: return false

        user.nickname = nickname
        userRepo.update(user)
        return true
    }
}
