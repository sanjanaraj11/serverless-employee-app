/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployees = `query GetEmployees($id: ID!) {
    getEmployees(id: $id) {
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
export const listEmployees = `query ListEmployees(
    $filter: ModelEmployeesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
