import { Amplify } from 'aws-amplify'
import awsconfig from '~/aws-exports'
import { defineNuxtPlugin } from '#app'

// Amplifyの設定を行う
export default defineNuxtPlugin(() => {
  Amplify.configure(awsconfig)
})
