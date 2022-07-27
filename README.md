## 前置依赖  

### 必须
[vue3.0](https://vuejs.org/) 

### 非必须
[Element-plus](https://element-plus.org/en-US/) 

```
npm install -S element-plus vue3
```

> 安装 `Element-plus` 之后 需要自行注册 `ElSelect` 和 `ElOption` 两个组组件,才可以直接使用内置组件，如果不使用 `Element-plus` 库，可以使用 `hooks` 方法获取数据，然后使用其他组件库的选择器组件

## 组件使用

```
npm install -S vue-timezone-select

```

## Props
```ts
type Props = {
  modelValue: string // 绑定值 v-model
  labelStyle?: ILabelStyle // 展示内容格式
  timezones?: ICustomTimezone // 时区数据
  filterable?: boolean // 是否开启筛选
  placeholder?: string 
}

/**
 * key:   "Pacific/Midway"        选中是绑定的值 
 * value: "Midway Island, Samoa"  选中时展示的内容
 * key - 更多时区配置 可参考 https://github.com/dmfilipenko/timezones.json
 */
type ICustomTimezone = {
  [key: string]: string
}

type ILabelStyle = "original" | "altName" | "abbrev"

```

## Event

```ts
type ITimezoneOption = {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
}

change(info: ITimezoneOption) => void
```


## 使用示例

### 使用 Element-plus

```html

<script setup lang="ts">
import { ref } from "vue";
import TimeSelect, { ITimezoneOption } from "vue-timezone-select";

const localValue = ref("");
const selectInfo = ref({});
const labelStyle = "original"; // original abbrev altName

const timezones = ref({
  "Pacific/Midway": "Midway Island, Samoa",
  "America/Tijuana": "Tijuana",
  "Asia/Almaty": "Almaty, Novosibirsk", 
});

function changeHandle(val: ITimezoneOption) {
  selectInfo.value = val;
}
</script>

<template>
  <div class="play-container">
    <div style="width: 500px">
      <TimeSelect
        placeholder="please select your timezone"
        :label-style="labelStyle"
        v-model="localValue"
        filterable
        @change="changeHandle"
      ></TimeSelect>

      <div style="height: 20px; padding: 10px 0">selected value：{{ localValue }}</div>
      <div style="height: 150px">selected info: {{ selectInfo }}</div>
    </div>
  </div>
</template>


```

### 使用其他组件库，获取到数据，使用组件库自身的选择器组件

```html

<script setup lang="ts">
import { ref } from "vue";
import { useTimezoneSelect } from "vue-timezone-select";

// 使用 hook 方法
const otherValue = ref("");
const otherInfo = ref({});
const otherLabelStyle = ref("altName"); // original abbrev altName
const { timezoneOptions: otherOptions, getSelectedInfo } = useTimezoneSelect({
  labelStyle: otherLabelStyle,
  timezones,
});
function otherChangeHandle(val: string) {
  otherInfo.value = getSelectedInfo(val, otherOptions);
}
</script>

<template>
  <div class="play-container">
    <div style="width: 500px">
      <div style="height: 20px; padding: 10px 0">选中值：{{ localValue }}</div>
      <el-select
        style="width: 100%"
        filterable
        v-model="otherValue"
        @change="otherChangeHandle"
      >
        <template v-for="item in otherOptions" :key="item.value">
          <el-option :label="item.label" :value="item.value"></el-option>
        </template>
      </el-select>
      <div style="height: 150px">详细信息: {{ otherInfo }}</div>
    </div>
  </div>
</template>


```