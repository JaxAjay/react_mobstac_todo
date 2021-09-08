import axios from 'axios'

const URL = 'http://127.0.0.1:8000/todo/all/'

export function testgetAllTodo(){
    let output = {}
    return axios({
        method: 'get',
        url: URL,
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        output['success'] = true
        output['data'] = response.data
        return output
      })
      .catch(error => {
        output['success'] = false
        output['data'] = error
        return output
      })
    // return output
}
const getAllTodo = ()=>{
    let output = {}
    axios({
        method: 'get',
        url: URL,
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        output['success'] = true
        output['data'] = response.data
      })
      .catch(error => {
        output['success'] = false
        output['data'] = error
      })
    return output
}

const addTodo = ()=>{
    axios({
        method: 'post',
        data:{'title' : 'title1 --sdsd- ' , 'description':"desssssssssss"},
        url: URL,
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        getAllTodo()
      })
      .catch(error => {
        console.log(error ,"==");
      })
}

// export default apiCalls =  {
//     getAllTodo,
//     addTodo,
//   }