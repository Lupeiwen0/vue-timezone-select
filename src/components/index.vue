<template>
  <div class="vue-timezone-select" style="width: 100%">
    <el-select
      style="width: 100%"
      :placeholder="placeholder"
      :filterable="filterable"
      :model-value="props.modelValue"
      @change="selectChange"
    >
      <template v-for="item in timezoneOptions" :key="item.value">
        <el-option :label="item.label" :value="item.value"></el-option>
      </template>
    </el-select>
  </div>
</template>

<script lang="ts">
export default {
  name: "TimezoneSelect",
};
</script>

<script setup lang="ts">
import { toRef } from "vue";
import { useTimezoneSelect } from "../hooks/useTimezoneSelect";
import AllTimezones from "../utils/timezone-list";

const emit = defineEmits(["update:modelValue", "change"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  timezones: {
    type: Object,
    default: () => AllTimezones,
  },
  labelStyle: {
    type: String,
    default: "original",
  },
  filterable: {
    type: Boolean,
    default: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const { timezoneOptions, getSelectedInfo } = useTimezoneSelect({
  labelStyle: toRef(props, "labelStyle"),
  timezones: toRef(props, "timezones"),
});

function selectChange(val: string): void {
  emit("update:modelValue", val);

  const selectInfo = getSelectedInfo(val, timezoneOptions);
  emit("change", { ...selectInfo });
}
</script>
