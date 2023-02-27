package com.zoe.dm.rb.infra.web

import com.zoe.dm.rb.application.CreateUserCommandHandler
import com.zoe.dm.rb.application.FindByIdQueryHandler
import com.zoe.dm.rb.application.UpdateNicknameCommandHandler
import com.zoe.dm.rb.domain.User
import org.springframework.web.bind.annotation.*

/**
 * @author carl
 * @since 2023-02-27 21:23
 **/
@RestController
@RequestMapping("/users")
open class UserApi(
    private val createUserCommandHandler: CreateUserCommandHandler,
    private val updateNicknameCommandHandler: UpdateNicknameCommandHandler,
    private val findByIdQueryHandler: FindByIdQueryHandler
) {

    @PostMapping
    fun create(@RequestBody form: CreateForm): Int = createUserCommandHandler.handle(form)

    @PatchMapping("/{id}")
    fun updateNickname(@RequestBody nickname: UpdateNicknameBody, @PathVariable id: Int): Boolean =
        updateNicknameCommandHandler.handle(
            Pair(id, nickname)
        )

    @GetMapping("/{id}")
    fun findById(@PathVariable id: Int): UserVO = UserApiConverter.toVO(findByIdQueryHandler.query(id))

}


data class CreateForm(
    val username: String,
    val password: String
)

data class UpdateNicknameBody(
    val nickname: String
)

data class UserVO(
    val id: Int,
    val username: String,
    var nickname: String,
)

object UserApiConverter {
    fun toVO(src: User): UserVO =
        UserVO(
            src.id!!,
            src.username,
            src.nickname
        )

}