import { Attributes } from "./Attributes";
import { Eventings } from "./Eventing";
import { Sync } from "./Sync";
export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  eventing: Eventings = new Eventings();
  sync: Sync<UserProps> = new Sync<UserProps>("http://localhost:3001/users");
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
