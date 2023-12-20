import { PayloadType as PayloadType } from "./payload-type.enum";
import { Payload } from "./payload.model";

export class Envelope {
  type: PayloadType = PayloadType.NA;
  payload!: Payload;
}