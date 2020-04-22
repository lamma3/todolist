import axios from "axios";
import { TODO_LIST_API_URL } from "../constants/constants";

export class TodoListAPI {
  static getTodoList = () => axios.get(TODO_LIST_API_URL);
}

export default TodoListAPI;
