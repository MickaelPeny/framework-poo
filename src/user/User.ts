import { Attributes } from "../framework/Attributes";
import { Eventings } from "../framework/Eventing";
import { Model } from "../framework/Model";
import { Sync } from "../framework/Sync";
export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventings(),
      new Sync("http://localhost:3001/users")
    );
  }
}
