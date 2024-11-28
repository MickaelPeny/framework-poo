import { View } from "../framework/View";
import { User, UserProps } from "./User";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveModelClick,
    };
  }

  onSetAgeClick = () => {
    this.model.setRandomAge();
  };

  onSetNameClick = () => {
    const inputElement = this.parent.querySelector("input");
    if (inputElement) {
      const newName = inputElement.value.trim();
      if (newName) {
        this.model.set({ name: newName });
      } else {
        //throw new Error("Y'a pépin");
      }
    }
  };

  onSaveModelClick = () => {
    this.model.save();
  };

  template(): string {
    return `
    <h1>User Form</h1>
    <input id="user-input" />
    <button class="set-age">Random Age</button>
    <button class="set-name">Save</button>
    <button class="save-model">Save</button>
    </div>
    `;
  }
}
