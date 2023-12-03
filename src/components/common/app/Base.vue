<script setup lang="ts">
type Props = {
  dark?: boolean
}

defineProps<Props>()
</script>

<template>
  <ion-page>
    <ion-content
      :color="dark ? 'dark' : 'light'"
    >
      <slot />
    </ion-content>
    <slot name="footer" />
  </ion-page>
</template>
