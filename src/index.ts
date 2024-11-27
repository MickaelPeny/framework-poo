import { User } from "./user/User";
const collection = User.buildCollection();
collection.fetch();

console.log(collection);
