export interface IAnimationType {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
  6: boolean;
  7: boolean;
  8: boolean;
  9: boolean;
  10: boolean;
  11: boolean;
}

export interface ITextAnimationType {
  id: number;
  type: string;
  active: boolean;
}

export interface IButtonType {
  animationId?: keyof IAnimationType;
  textId: number;
  start?: number;
  end?: number;
  title: string;
}
