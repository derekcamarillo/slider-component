# Vue-slider-component

[![downloads](https://img.shields.io/npm/dt/vue-slider-component.svg)](https://www.npmjs.com/package/vue-slider-component)
[![npm-version](https://img.shields.io/npm/v/vue-slider-component.svg)](https://www.npmjs.com/package/vue-slider-component)
[![license](https://img.shields.io/npm/l/express.svg)]()

> 🎚 一个高度定制化的滑块组件

[English](https://github.com/NightCatSama/vue-slider-component/blob/refactor/README.md) | 简体中文


## ✨ 新特性(v3.x)
- 🔧 修复了[异常](https://github.com/NightCatSama/vue-slider-component#exceptions)
- 🍖 更加可定制化
- 👗 多种样式主题
- 🐳 支持更多的滑块
- 📌 增加标志设置
- 🎉 支持 SSR
- 🍒 支持 Typescript


## 🎯 安装
```bash
$ yarn add vue-slider-component@beta
```


## 🚀 使用
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

## 更新日志

每个版本的[更新日志](https://github.com/NightCatSama/vue-slider-component/blob/master/CHANGELOG.md).

## License

[MIT](https://github.com/NightCatSama/vue-slider-component/blob/master/LICENSE)