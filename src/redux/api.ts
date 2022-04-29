import axios from "axios";
export const fetchEmployee = async () => {
  return axios.get('http://localhost:3010/employee');
};

export const deleteEmployee=async(id:number)=>{
 return axios.delete(`http://localhost:3010/employee/${id}`);
}