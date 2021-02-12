import { types } from '../types/types';


// Obtiene los datos de la API
export const startLoadingEmployees = () => {
  return async (dispatch) => {
    try {
      const resp = await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jorge_calderon')
      const { data: { employees } } = await resp.json();
      dispatch(setEmployees(employees));
    } catch (error) {
      console.log(error);
    }

  }
}

// Manda un empleado por post
export const postNewEmployee = (employee) => {
  return async (dispatch) => {
    try {

      const myJSON = JSON.stringify(employee);
      await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/jorge_calderon', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: myJSON
      });
      console.log('OK');

    } catch (error) {
      console.log(error);
    }

  }
}

export const setEmployees = (employees) => ({
  type: types.employeesLoad,
  payload: employees
});

export const addEmployeeToState = (employee) => ({
  type: types.addEmployeeState,
  payload: employee
});


