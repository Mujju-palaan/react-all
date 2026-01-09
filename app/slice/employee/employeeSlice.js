import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Mujju",
      email: "dev@mujju.com",
      phone: "+911234567",
      position: "Developer",
    },
  ],
};
export const employeeSlice = createSlice({
  name: "Employees",
  initialState,
  reducers: {
    AddEmployee: (state, action) => {
        const id = state.employees.length + 1;
      const employee = {
        id: id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        position: action.payload.position,
      };
      state.employees.push(employee)
    },
    removeEmployee: (state, action)=>{
        state.employees = state.employees.filter((employee)=>employee.id != action.payload)
    }
  },
});


export const {AddEmployee, removeEmployee} = employeeSlice.actions

export default employeeSlice.reducer