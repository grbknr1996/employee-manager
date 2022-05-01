import axios from "axios";
import {Employee} from '../models/model';
export const fetchEmployee = async () => {
  return axios.get('http://localhost:3010/employee');
};

export const deleteEmployee=async(id:number)=>{
  
 return axios.delete(`http://localhost:3010/employee/${id}`);
}

export const updateEmployee=async(id:number,employee:any)=>{
 return axios.put(`http://localhost:3010/employee/${id}`,employee);
}