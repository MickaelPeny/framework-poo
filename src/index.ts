import { Attributes } from "./Attributes";
import { UserProps } from "./User";

const attrs = new Attributes<UserProps>({ id: "5", name: "john", age: 25 });

const id = attrs.get("id");
