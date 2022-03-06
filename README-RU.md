# vue-slider-component

[![downloads](https://img.shields.io/npm/dm/vue-slider-component.svg)][NPM]
[![npm-version](https://img.shields.io/npm/v/vue-slider-component.svg)][NPM]
[![license](https://img.shields.io/npm/l/express.svg)]()

> 🎚 Кастомизируемый слайдер

[English][EN] | [简体中文][CH] | Русский

## 🍉 Vue3.x

<u>Находится в стадии бета-тестирования</u> и может содержать непредвиденные ошибки, пожалуйста, используйте с осторожностью.

#### Установка последней версии

```bash
$ yarn add vue-slider-component@next
# npm install vue-slider-component@next --save
```

#### Внимание
- Измените `data` на `v-data` из-за конфликта типов. (вероятно, временная модификация)

## ✨ Цели
- 🍖 Улучшить кастомизируемость
- 👗 Добавить темы
- 📌 Добавить этикетки
- 🐳 Добавить поддержку большего количества ползунков
- 🎉 Добавить поддержка SSR
- 🍒 Добавить поддержка Typescript

## 📚 Документация

- API и примеры на [nightcatsama.github.io](https://nightcatsama.github.io/vue-slider-component)
- [Демо (jsfiddle.net)](https://jsfiddle.net/NightCatSama/2xy72dod/10547/)


## 🎯 Установка
```bash
$ yarn add vue-slider-component
# npm install vue-slider-component --save
```

## 🚀 Пример

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
    VueSlider
  },
  
  data () {
    return {
      value: 0
    }
  }
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
  }
}
</script>
```
</details>

## Список изменений

Список изменения для каждого резила опубликован в [release notes](https://github.com/NightCatSama/vue-slider-component/blob/master/CHANGELOG.md).

## Поддержка

Если код был полезен - [купи мне кофе](https://www.buymeacoffee.com/nightcat) ☕.

## Лицензия

[MIT](https://github.com/NightCatSama/vue-slider-component/blob/master/LICENSE)


[NPM]: https://www.npmjs.com/package/vue-slider-component

[EN]: https://github.com/NightCatSama/vue-slider-component/blob/master/README.md
[CH]: https://github.com/NightCatSama/vue-slider-component/blob/master/README-CN.md
[RU]: https://github.com/NightCatSama/vue-slider-component/blob/master/README-RU.md
