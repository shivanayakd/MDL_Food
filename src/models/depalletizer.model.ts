import { Depalletiserrecords } from "./depalletizerrecords.model";

export class Depalletiser {
  constructor(
    public date: string,
    public operator: string,
    public product: any,
    public bottlewaste: string,
    public records: Depalletiserrecords[]
    ) {}
}

