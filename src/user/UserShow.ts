import { View } from "../framework/View";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
    <h1>User Details</h1>
    <p>User name: ${this.model.get("name")}</p>
    <p>User name: ${this.model.get("age")}</p>
    </div>
    `;
  }
}
