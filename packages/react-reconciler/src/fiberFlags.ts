export type Flags = number;
export const NoFlags = 0b0000000;
export const Placement = 0b0000001;
//跟属性相关的更新
export const Update = 0b0000010;
export const ChildDeleteion = 0b0000100;
export const MutationMask = Placement | Update | ChildDeleteion;
