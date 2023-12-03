<script setup lang="ts">
const mock = [
  {
    title: '胸の日',
    menus: [
      {
        name: 'ベンチ',
        weight: '70',
        counts: '10',
        sets: '3'
      },
      {
        name: 'ダンベルフライ',
        weight: '20',
        counts: '10',
        sets: '3'
      },
      {
        name: 'アブローラー',
        counts: '10',
        sets: '5'
      }
    ]
  },
  {
    title: '肩の日',
    menus: [
      {
        name: 'サイドレイズ',
        weight: '10',
        counts: '10',
        sets: '3'
      },
      {
        name: 'シーテッドリアレイズ',
        weight: '10',
        counts: '10',
        sets: '3'
      },
      {
        name: 'アーノルドプレス',
        weight: '14',
        counts: '10',
        sets: '3'
      },
      {
        name: 'ショルダープレス',
        weight: '14',
        counts: '10',
        sets: '3'
      },
      {
        name: 'シュラッグ',
        weight: '30',
        counts: '10',
        sets: '3'
      }
    ]
  },
  {
    title: '脚・背中の日',
    menus: [
      {
        name: '懸垂',
        weight: '20',
        counts: '10',
        sets: '3'
      },
      {
        name: 'レッグプレス',
        weight: '50',
        counts: '10',
        sets: '3'
      },
      {
        name: 'アブローラー',
        counts: '10',
        sets: '5'
      }
    ]
  }
]
useHead({
  title: 'TOP'
})

const router = useIonRouter()

const alertButtons = [
  {
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
      console.log('Alert canceled');
    },
  },
  {
    text: 'OK',
    role: 'confirm',
    handler: () => {
      console.log('Alert confirmed');
    },
  }
]

const isOpen = ref(false)
const setOpen = (state: boolean) => {
  isOpen.value = state;
}
</script>

<template>
  <common-app-base>
    <common-text-info>
      本日のメニュー
    </common-text-info>
    <template
      v-for="menu in mock"
    >
      <ion-item>
        <ion-button
          color="danger"
          slot="start"
        >
          登録
        </ion-button>
        <ion-button
          fill="clear"
          slot="start"
        >
          編集
        </ion-button>
        <ion-label>
          {{ menu.title }}
        </ion-label>
      </ion-item>
    </template>

    <ion-button
      expand="block"
      @click="router.push('/register')"
    >
      メニュー登録
    </ion-button>

    <ion-alert
      :is-open="isOpen"
      header="このメニューで記録しますか？"
      :buttons="alertButtons" @didDismiss="setOpen(false)"
    />
  </common-app-base>
</template>
