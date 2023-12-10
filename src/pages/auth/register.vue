<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated']
})

useHead({
  title: 'メニュー登録'
})
</script>

<template>
  <common-app-base>
    <common-text-info>
      メニューの登録
    </common-text-info>
    <menu-form />
  </common-app-base>
</template>
