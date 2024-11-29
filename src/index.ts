import { User } from "./user/User";
import { UserEdit } from "./user/UserEdit";
import { UserList } from "./user/UserList";

const parent = document.getElementById("root");
const john = User.buildUser({ name: "John Doe", age: 45 });

// User Edit
const userEdit = new UserEdit(parent!, john);
userEdit.render();

// User List
const usersParent = document.createElement("div");
parent?.appendChild(usersParent);
const userCollection = User.buildCollection();
const userList = new UserList(usersParent, userCollection);
userCollection.fetch();
userList.render();
