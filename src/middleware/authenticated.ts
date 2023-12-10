import { getCurrentUser } from 'aws-amplify/auth'

export default defineNuxtRouteMiddleware(async () => {
  try {
    const res = await getCurrentUser()
  } catch (error) {
    console.error(error)
    // ユーザーがログインされていない場合
    // ログイン画面へ遷移
    return navigateTo('/unauth/login')
  }
})
