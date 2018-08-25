import axios from 'axios'

export default {
  get() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
  },
}
