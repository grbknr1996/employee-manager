import axios from "axios";
import { Employee } from "../models/model";

export const fetchEmployee = async () => {
  return axios.get('http://localhost:3010/employee');
};
