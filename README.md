
## 🍉 Vue3.x

This is still in beta and may contain unexpected bugs, please use with caution.

#### install

```bash
$ yarn add vue-slider-component@next
# npm install vue-slider-component@next --save
```

## ✨ Features

- 🍖 More customizable
- 👗 Multiple style themes
- 🐳 Support for more sliders
- 📌 Add marks
- 🎉 Support SSR
- 🍒 Support Typescript

## 🎯 install

```bash
$ yarn add vue-slider-component
# npm install vue-slider-component --save
```

## 🚀 Usage

<details><summary>Vue 2</summary>

```vue
<template>
  <vue-slider v-model="value" />
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider,
  },

  data() {
    return {
      value: 0,
    }
  },
}
</script>
```

</details>

<details><summary>Vue 3</summary>

```vue
<template>
  <vue-slider v-model="value" />
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  setup() {
    const data = reactive({ value: 0 })
    return toRefs(data)
  },
}
</script>
```

</details>

