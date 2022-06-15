<template>
  <div>
    <div class="text-center">
      <h1>Employees</h1>

      <table class="table">
        <tr>
          <td>id</td>
          <td>firstName</td>
          <td>lastName</td>
          <td>email</td>
          <td>update</td>
          <td>delete</td>
        </tr>
        <tr v-for="employee in listEmployee" v-bind:key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <button
              class="btn btn-secondary"
              @click="deleteEmployee(employee.id)"
            >
              update
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="updateEmployee">
              delete
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div class="m-5">
      <form @submit.prevent="addEmployee()">
        <label>First Name</label>
        <input
          class="ml-5"
          style="border: 1px solid black"
          type="text"
          v-model="employee.firstName"
        />
        <br />

        <label>Last Name</label>
        <input
          class="ml-5"
          style="border: 1px solid black"
          type="text"
          v-model="employee.lastName"
        />
        <br />

        <label>Email</label>
        <input
          class="ml-5"
          style="border: 1px solid black"
          type="text"
          v-model="employee.email"
        />
        <br />

        <button type="submit" class="btn btn-primary">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import EmployeeService from "@/services/EmployeeService.js";
// import axios from "axios";

export default {
  name: "TestApi",
  data() {
    return {
      listEmployee: [],
      employee: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  methods: {
    getEmployee() {
      EmployeeService.getEmployee().then((res) => {
        console.log(res.data);
        this.listEmployee = res.data; 
      });
    },
    addEmployee() {
      EmployeeService.addEmployee(this.employee).then((res) => {
        alert(res);
      });
    },
    deleteEmployee(id) {
      EmployeeService.deleteEmployee(id).then(() => {
        this.getEmployee()
      });
    },
  },
  created() {
    this.getEmployee();
  },
};
</script>

<style>
</style>