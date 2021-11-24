declare namespace Logic {
  export namespace FindTreeIds {
    export type Id = string | number
    export interface Options {
      id?: string;
      children?: string;
    }
    export type Items = Array<{ [prop: string]: any }>
    export type Return = (items: Items, parentId?: Id) => string[] | undefined
  }
}
