import { User } from "./User";

const user = new User({ id: "2983" });

const alice = new User({ name: "Alice", age: 32 });
alice.save();
