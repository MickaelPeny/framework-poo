import { User } from "./User";
type Callback = () => void;
export class Eventings extends User {
  on(eventName: string, callback: Callback) {
    const callbacks = this.events[eventName] || [];
    callbacks.push(callback);
    this.events[eventName] = callbacks;
  }

  trigger(eventName: string): void {
    const callbacks = this.events[eventName];
    if (!callbacks || !callbacks.length) {
      return;
    }
  }
}
