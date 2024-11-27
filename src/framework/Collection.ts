import axios from "axios";
import { Eventings } from "./Eventing";
import { IEventing } from "./interfaces";

export class Collection<T, P> {
  models: T[] = [];
  eventing: IEventing = new Eventings();

  constructor(public rootUrl: string, public deserialize: (json: P) => T) {}

  get on() {
    return this.eventing.on;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response) => {
      response.data.forEach((data: P) => {
        const model = this.deserialize(data);
        this.models.push(model);
      });
      this.trigger("change");
    });
  }
}
