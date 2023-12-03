<script setup lang="ts">
type FormType = 'title' | 'name' | 'counts' | 'sets'

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

const data = reactive({
  title: {
    value: '',
    isError: true
  },
  menus: [
    {
      name: {
        value: '',
        isError: true
      },
      weight: {
        value: undefined,
        isError: false
      },
      counts: {
        value: undefined,
        isError: true
      },
      sets: {
        value: undefined,
        isError: true
      }
    }
  ]
})

const isOpen = ref(false)

const menuLength = computed(() => data.menus.length)

const setOpen = (state: boolean) => {
  isOpen.value = state;
}

const addMenus = () => {
  data.menus.push({
    name: {
      value: '',
      isError: true
    },
    weight: {
      value: undefined,
      isError: false
    },
    counts: {
      value: undefined,
      isError: true
    },
    sets: {
      value: undefined,
      isError: true
    }
  })
}

const removeMenus = (index: number) => {
  data.menus.splice(index, 1)
}

const register = () => {
  isOpen.value = true
}

const isErrorExists = computed(() => {
  if (data.title.isError) {
    return true
  }

  return data.menus.some(menu =>
    menu.name.isError || menu.counts.isError || menu.sets.isError
  )
})

const validate = (e: CustomEvent, type: FormType, index?: number) => {
  const target = e.target as HTMLInputElement
  switch (type) {
    case 'title':
      if (!target.value) {
        data.title.isError = true
      } else {
        data.title.isError = false
      }

      break
    case 'name':
      if (!target.value) {
        data.menus[index ?? 0].name.isError = true
      } else {
        data.menus[index ?? 0].name.isError = false
      }

      break
    case 'counts':
      if (!target.value) {
        data.menus[index ?? 0].counts.isError = true
      } else {
        data.menus[index ?? 0].counts.isError = false
      }

      break
    case 'sets':
      if (!target.value) {
        data.menus[index ?? 0].sets.isError = true
      } else {
        data.menus[index ?? 0].sets.isError = false
      }

      break
  }

  target.classList.add('ion-touched')
}
</script>

<template>
  <ion-item lines="none">
    <ion-input
      v-model="data.title.value"
      :class="data.title.isError ? 'ion-invalid' : 'ion-valid'"
      error-text="タイトルは必須項目です。"
      label="タイトル"
      placeholder="背中の日"
      @ion-blur="validate($event, 'title')"
    />
  </ion-item>
  <ion-list class="ion-margin-top">
    <ion-card v-for="(menu, i) in data.menus">
      <ion-card-content>
        <ion-item lines="none">
          <ion-input
            v-model="menu.name.value"
            :class="menu.name.isError ? 'ion-invalid' : 'ion-valid'"
            error-text="メニュー名は必須項目です。"
            label="メニュー名"
            placeholder="ベンチプレス"
            @ion-blur="validate($event, 'name', i)"
          />
        </ion-item>
        <ion-item lines="none">
          <ion-input
            v-model="menu.weight.value"
            class="ion-valid"
            error-text="メニュー名は必須項目です。"
            label="重さ"
            type="number"
            placeholder="50"
          />
          <ion-note slot="end">
            kg
          </ion-note>
        </ion-item>
        <ion-item lines="none">
          <ion-input
            v-model="menu.counts.value"
            :class="menu.counts.isError ? 'ion-invalid' : 'ion-valid'"
            error-text="回数は必須項目です。"
            label="回数"
            type="number"
            placeholder="10"
            @ion-blur="validate($event, 'counts', i)"
          />
          <ion-note slot="end">
            回
          </ion-note>
        </ion-item>
        <ion-item lines="none">
          <ion-input
            v-model="menu.sets.value"
            :class="menu.sets.isError ? 'ion-invalid' : 'ion-valid'"
            error-text="セット数は必須項目です。"
            label="セット数"
            type="number"
            placeholder="3"
            @ion-blur="validate($event, 'sets', i)"
          />
          <ion-note slot="end">
            セット
          </ion-note>
        </ion-item>
      </ion-card-content>
      <ion-button
        v-if="menuLength > 1"
        color="danger"
        expand="block"
        fill="clear"
        size="small"
        @click="removeMenus(i)"
      >
        削除
      </ion-button>
    </ion-card>
  </ion-list>

  <ion-button
    :disabled="data.menus.length > 4"
    expand="block"
    @click="addMenus"
  >
    メニューの追加
  </ion-button>

  <ion-button
    color="danger"
    :disabled="isErrorExists"
    expand="block"
    @click="register"
  >
    登録
  </ion-button>

  <ion-button
    color="medium"
    expand="block"
    @click="router.back()"
  >
    戻る
  </ion-button>

  <ion-alert
    :is-open="isOpen"
    header="メニューを登録しますか？"
    :buttons="alertButtons"
    @didDismiss="setOpen(false)"
  />
</template>
