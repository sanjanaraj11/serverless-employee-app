/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEmployees = /* GraphQL */ `
  mutation CreateEmployees(
    $input: CreateEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    createEmployees(input: $input, condition: $condition) {
      id
      firstname
      lastname
      line1
      line2
      city
      state
      zipcode
      name
    }
  }
`;
export const updateEmployees = /* GraphQL */ `
  mutation UpdateEmployees(
    $input: UpdateEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    updateEmployees(input: $input, condition: $condition) {
      id
      firstname
      lastname
      line1
      line2
      city
      state
      zipcode
      name
    }
  }
`;
export const deleteEmployees = /* GraphQL */ `
  mutation DeleteEmployees(
    $input: DeleteEmployeesInput!
    $condition: ModelEmployeesConditionInput
  ) {
    deleteEmployees(input: $input, condition: $condition) {
      id
      firstname
      lastname
      line1
      line2
      city
      state
      zipcode
      name
    }
  }
`;
