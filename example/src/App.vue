<script setup lang="ts">
import { ref } from "vue";
import TimezoneSelect, { useTimezoneSelect, ILabelStyle, ITimezoneOption } from "vue-timezone-select";

const dynamicTimezones = ref({
  "Pacific/Midway": "Pacific/Midway",
  "America/New_York": "America/NewYork",
  "America/Toronto": "America/Toronto",
});

/**
 * 使用 element-ui 时可以直接使用
 */
const localValue = ref("");
const selectInfo = ref({});
const labelStyle = ref(""); // original abbrev altName

function changeHandle(val: ITimezoneOption) {
  selectInfo.value = val;
}

/**
 * 使用其他组件库时
 * 请使用 hook 方法
 */
const otherValue = ref("");
const otherInfo = ref({});
const otherLabelStyle = ref("altName"); // original abbrev altName
const { timezoneOptions: otherOptions, getSelectedInfo } = useTimezoneSelect({
  labelStyle: otherLabelStyle,
  timezones: dynamicTimezones,
});
function otherChangeHandle(val: string) {
  otherInfo.value = getSelectedInfo(val, otherOptions);
}
</script>

<template>
  <div class="play-container">
    <div style="width: 500px">
      <div style="height: 20px; padding: 10px 0">使用Element-plus组件库</div>
      <div style="height: 20px; padding: 10px 0">选中值：{{ localValue }}</div>
      <TimezoneSelect
        placeholder="please select your timezone"
        :label-style="labelStyle"
        v-model="localValue"
        filterable
        @change="changeHandle"
      ></TimezoneSelect>
      <div style="height: 150px">详细信息: {{ selectInfo }}</div>
    </div>

    <div style="width: 500px">
      <div style="height: 20px; padding: 10px 0">使用 Hook 方法</div>
      <div style="height: 20px; padding: 10px 0">选中值：{{ localValue }}</div>
      <el-select style="width: 100%" filterable v-model="otherValue" @change="otherChangeHandle">
        <template v-for="item in otherOptions" :key="item.value">
          <el-option :label="item.label" :value="item.value"></el-option>
        </template>
      </el-select>
      <div style="height: 150px">详细信息: {{ otherInfo }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.play-container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
