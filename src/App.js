import './App.css';
import React , { useState , useEffect  } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'
import axios from 'axios'
import {testgetAllTodo} from './service';
function App() {
  const onClick = () => {
    axios({
      method: 'post',
      data:{'title' : 'title1 --sdsd- ' , 'description':"desssssssssss"},
      url: 'http://127.0.0.1:8000/todo/all/',
      auth: {
        username: 'jax',
        password: '123'
      }
    })
    .then(response => {
      console.log(response);
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todo/all/',
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        console.log(response);
        setTodoList(response.data)
      })
    })
    .catch(error => {
      console.log(error ,"==");
    })
  }

  const todoAction = (id,type) => {
    if (type == 'edit'){
      axios({
        method: 'put',
        data:{"is_done":true},
        url: `http://127.0.0.1:8000/todo/detail/${id}/`,
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        console.log(response);
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/todo/all/',
          auth: {
            username: 'jax',
            password: '123'
          }
        })
        .then(response => {
          console.log(response);
          setTodoList(response.data)
        })
      })
      .catch(error => {
        console.log(error ,"==");
      })
    }else if(type == 'delete'){
      console.log("sdsd");
      axios({
        method: 'delete',
        // data:{"is_done":true},
        url: `http://127.0.0.1:8000/todo/detail/${id}/`,
        auth: {
          username: 'jax',
          password: '123'
        }
      })
      .then(response => {
        console.log(response);
        axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/todo/all/',
          auth: {
            username: 'jax',
            password: '123'
          }
        })
        .then(response => {
          console.log(response);
          setTodoList(response.data)
        })
      })
      .catch(error => {
        console.log(error ,"==");
      })
    } else {
      console.log("sdsdsss");
    }
  }

  const [todo , setTodoList ]= useState([])

  useEffect(async () => {
    let data = await testgetAllTodo()
    console.log(data , data['data']);
    if (data.success){
      setTodoList(data.data)
    }
    
  } , [])
  
  return (
    <div className="App">
      <Header onClick={onClick}/>
      <TodoList todo={todo} todoAction={todoAction}/>
    </div>
  );
}

export default App;
