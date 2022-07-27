import TimezoneSelect from "./components/index.vue";
import { useTimezoneSelect } from "./hooks/useTimezoneSelect";
import { ITimezone, ITimezoneOption, ILabelStyle } from "./utils/timezone";

export type { ITimezone, ITimezoneOption, ILabelStyle };

export { useTimezoneSelect };

export default TimezoneSelect;
