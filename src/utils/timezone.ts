
export type ICustomTimezone = {
  [key: string]: string
}

export type ILabelStyle = "original" | "altName" | "abbrev"

export interface ITimezoneOption {
  value: string
  label: string
  abbrev?: string
  altName?: string
  offset?: number
}

export type ITimezone = ITimezoneOption | string
