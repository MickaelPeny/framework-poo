import axios from "axios";
import { HasId } from "./interfaces";

export class Sync<P extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: string) {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: P) {
    const { id } = data;
    if (id) {
      return axios.patch(`${this.rootUrl}/${id}`, data);
    }
    return axios.post(`${this.rootUrl}`, data);
  }
}
