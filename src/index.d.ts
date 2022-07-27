import { VueElement } from "vue";
import AllTimezones from "./utils/timezone-list";
import type { ITimezone, ITimezoneOption, ILabelStyle, ICustomTimezone } from "./utils/timezone";
import type { UseTimezoneSelectProps, TimezoneSelectInstance } from "./hooks/useTimezoneSelect";

export type { ITimezone, ITimezoneOption, ILabelStyle };

declare const useTimezoneSelect: (option?: UseTimezoneSelectProps) => TimezoneSelectInstance;

export { AllTimezones, useTimezoneSelect };

declare const TimezoneSelect: (
  modelValue: string,
  labelStyle?: string,
  timezones?: ICustomTimezone,
  filterable?: Boolean,
  placeholder?: string
) => VueElement;

export default TimezoneSelect;
