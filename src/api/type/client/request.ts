import { MachiningMethodType, MaterialType, RequestStatusType } from '~/constants/type';

export interface RequestType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: MachiningMethodType[];
  material: MaterialType[];
  status: RequestStatusType;
}

export interface RequestResponse {
  requests: RequestType[];
}
