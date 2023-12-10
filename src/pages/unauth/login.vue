<script setup lang="ts">
import { signIn, type SignInInput } from 'aws-amplify/auth'

useHead({
  title: 'ログイン'
})

const isLoading = ref(false)

const router = useIonRouter()

const loginField = reactive({
  username: '',
  password: ''
})


/**
 * ログイン
 */
const login = async () => {
  isLoading.value = true

  try {
    const userInfo = await signIn({
      username: loginField.username,
      password: loginField.password
    })

    router.push('/admin/record')
  } catch (err) {
    console.error('error signing in.', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <common-app-base>
    <common-text-info>
      ログイン
    </common-text-info>

    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-item lines="none">
            <ion-input
              v-model="loginField.username"
              label="ユーザー名"
              placeholder="メールアドレス"
            />
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-item lines="none">
            <ion-input
              v-model="loginField.password"
              label="パスワード"
              placeholder="パスワード"
            />
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-button
            @click="login"
          >
            ログイン
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </common-app-base>
</template>
