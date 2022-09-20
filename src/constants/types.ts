export type FnType = (param?: object) => void
export interface IBrand {
  contentItems: { displayText: string }[]
}
export interface IBanner {
  urls: string[]
  paths: string[]
}
export interface INavigationLink {
  text: string
  url: string
}

export interface ISelectItemValues {
  label: string
  value: string
}
