import axios from 'axios'

export default axios.create({
  // baseURL: 'http://localhost:8000/api',
  baseURL: 'https://jwt-axios-test.herokuapp.com/api/login',

  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access': 'application/json'
  // }
})
// axios.defaults.baseURL = 'http://localhost:8000';

// axios.defaults.headers.head = {
//   'Content-Type': 'application/json',
//   'Access': 'application/json'
// }

// axios.defaults.headers.common['Authorization']