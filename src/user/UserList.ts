import { Collection } from "../framework/Collection";
import { View } from "../framework/View";
import { User, UserProps } from "./User";
import { UserShow } from "./UserShow";

export class UserList extends View<User, UserProps> {
  constructor(
    public parent: Element,
    public collection: Collection<User, UserProps>
  ) {
    super(parent, collection as any);
    this.bindCollection();
  }

  bindCollection(): void {
    this.collection.on("change", () => {
      this.render();
    });
  }

  template(): string {
    return `
      <div>
        <h1>User List</h1>
        <select class="user-select">
          <option value="">Selectionne un user...</option>
          ${this.collection.models
            .map(
              (user) => `
              <option value="${user.get("id")}">${
                user.get("name") || ""
              }</option>
            `
            )
            .join("")}
        </select>
      </div>
    `;
  }

  eventsMap(): { [key: string]: (e: Event) => void } {
    return {
      "change:.user-select": this.onUserSelect,
    };
  }

  onUserSelect = (event: Event): void => {
    const select = event.target as HTMLSelectElement;
    const userId = select.value;

    if (userId) {
      const selectedUser = this.collection.models.find(
        (user) => user.get("id") === userId
      );

      if (selectedUser) {
        const userShow = document.querySelector(".user-show");
        if (userShow) {
          new UserShow(userShow as Element, selectedUser).render();
        }
      }
    }
  };
}
