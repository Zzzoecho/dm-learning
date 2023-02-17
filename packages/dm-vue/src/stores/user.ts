import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const userInfo = ref({
    id: 1,
    name: 'zoe'
  })

  const fetchUserInfo = () => {}

  return { isLogin, userInfo, fetchUserInfo }
})
