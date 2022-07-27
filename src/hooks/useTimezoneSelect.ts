import { computed, unref, Ref } from "vue";
import spacetime from "spacetime";
import soft from "timezone-soft";
import AllTimezones from "../utils/timezone-list";
import { ITimezoneOption, ICustomTimezone } from "../utils/timezone";

function initTimezoneOptions(labelStyle?: string | Ref<string>, timezones?: ICustomTimezone) {
  if (!timezones) timezones = AllTimezones;

  return Object.entries(timezones)
    .reduce<ITimezoneOption[]>((selectOptions, zone) => {
      const now = spacetime.now(zone[0]);
      const tz = now.timezone();
      const tzStrings = soft(zone[0]);

      let label = "";
      let abbr = now.isDST()
        ? // @ts-expect-error
          tzStrings[0].daylight?.abbr
        : // @ts-expect-error
          tzStrings[0].standard?.abbr;
      let altName = now.isDST() ? tzStrings[0].daylight?.name : tzStrings[0].standard?.name;

      const min = tz.current.offset * 60;
      const hr = `${(min / 60) ^ 0}:` + (min % 60 === 0 ? "00" : Math.abs(min % 60));
      const prefix = `(GMT${hr.includes("-") ? hr : `+${hr}`}) ${zone[1]}`;

      switch (labelStyle) {
        case "original":
          label = prefix;
          break;
        case "altName":
          label = `${prefix} ${altName?.length ? `(${altName})` : ""}`;
          break;
        case "abbrev":
          label = `${prefix} ${abbr?.length < 5 ? `(${abbr})` : ""}`;
          break;
        default:
          label = `${prefix}`;
      }

      selectOptions.push({
        value: tz.name,
        label: label,
        offset: tz.current.offset,
        abbrev: abbr,
        altName: altName,
      });

      return selectOptions;
    }, [])
    .sort((a: ITimezoneOption, b: ITimezoneOption) => a.offset - b.offset);
}

function getSelectedInfo(value: string, timezones: ITimezoneOption[] | Ref<ITimezoneOption[]>): ITimezoneOption {
  return unref(timezones).find((item) => item.value === value);
}

export type UseTimezoneSelectProps = {
  labelStyle?: string | Ref<string>;
  timezones?: ICustomTimezone | Ref<ICustomTimezone>;
};

export type TimezoneSelectInstance = {
  timezoneOptions: Ref<ITimezoneOption[]>;
  getSelectedInfo: (value: string, timezones: ITimezoneOption[] | Ref<ITimezoneOption[]>) => ITimezoneOption;
};

export function useTimezoneSelect({ labelStyle, timezones }: UseTimezoneSelectProps = {}): TimezoneSelectInstance {
  const timezoneOptions = computed(() => initTimezoneOptions(unref(labelStyle), unref(timezones)));
  return { timezoneOptions, getSelectedInfo };
}
