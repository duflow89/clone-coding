import { ValueOf } from './utils';

// 가공방식
export const MACHINING_METHOD = {
  MILLING: '밀링',
  LEDGE: '선반',
} as const;
export type MachiningMethodType = ValueOf<typeof MACHINING_METHOD>;

// 재료
export const MATERIAL = {
  ALUMINUM: '알루미늄',
  CARBON_STEEL: '탄소강',
  COPPER: '구리',
  ALLOY_STEEL: '합금강',
  STEEL: '강철',
} as const;
export type MaterialType = ValueOf<typeof MATERIAL>;

// 상태
export const REQUEST_STATUS = {
  WAIT: '대기중',
  CONSULT: '상담중',
} as const;
export type RequestStatusType = ValueOf<typeof REQUEST_STATUS>;
