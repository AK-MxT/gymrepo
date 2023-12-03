<script setup lang="ts">
type Props = {
  /** 上下のPaddingを減らす */
  shrink?: boolean
}

defineProps<Props>()
</script>

<template>
  <ion-grid>
    <ion-row
      :class="shrink ? 'ion-no-padding' : 'ion-padding-vertical'"
    >
      <ion-col>
        <ion-text>
          <slot />
        </ion-text>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
