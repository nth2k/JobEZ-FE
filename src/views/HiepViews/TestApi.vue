<template>
  <div style="margin-top: 500px">
    <div class="text-center">
      <h1>Employees</h1>

      <table class="table">
        <tr>
          <td>id</td>
          <td>firstName</td>
          <td>lastName</td>
          <td>email</td>
          <td>delete</td>
          <td>update</td>
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
              delete
            </button>
          </td>
          <td>
            <button class="btn btn-danger" @click="updateEmployee">
              update
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div class="m-5">
      <label>Id</label>
      <input
        class="ml-5"
        style="border: 1px solid black"
        type="text"
        v-model="employee.id"
      />
      <br />
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

      <button v-on:click="addEmployee()" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import EmployeeService from "@/services/TestApiService.js";
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
        this.listEmployee = res.data;
      });
    },
    async addEmployee() {
      let result = {
        id: this.employee.id,
        firstName: this.employee.firstName,
        lastName: this.employee.lastName,
        email: this.employee.email,
      };
      await EmployeeService.addEmployee(result).then(() => {});
    },
    deleteEmployee(id) {
      EmployeeService.deleteEmployee(id).then(() => {
        this.getEmployee();
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