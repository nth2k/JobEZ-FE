import axios from "axios";

const Base_URL = "http://localhost:8081";

class EmployeeService {
  getEmployee() {
    return axios.get(Base_URL + "/employees");
  }

  addEmployee(employee) {
    return axios.post(Base_URL + "/employees" , employee)
  }

  deleteEmployee(id){
    return axios.delete(Base_URL + "/employees/" + id)
  }
}

export default new EmployeeService();
