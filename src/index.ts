import { User } from "./User";

const user = new User({ name: "Leo", age: 99 });

console.log(user.get("name"));

user.on("change", () => console.log("changement"));

user.trigger("change");
