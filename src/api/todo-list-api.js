import axios from "axios";
import { TODO_LIST_API_URL } from "../constants/constants";

export class TodoListAPI {
  static getAll = () => axios.get(TODO_LIST_API_URL);
  static addItem = (item) => axios.post(`${TODO_LIST_API_URL}`, item);
  static updateItem = (item) => axios.put(`${TODO_LIST_API_URL}/${item.id}`, item);
  static deleteItem = (item) => axios.delete(`${TODO_LIST_API_URL}/${item.id}`);
}

export default TodoListAPI;
