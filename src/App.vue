<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="createTodo"></create-todo>
    <order-form v-bind:services="services"></order-form>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'
import OrderForm from './components/OrderForm'

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
    OrderForm
  },
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false
      }],
      services: [{
        name: 'Web Development',
        price: 300,
        active: true
      },
      {
        name: 'Design',
        price: 400,
        active: false
      },
      {
        name: 'Integration',
        price: 250,
        active: false
      },
      {
        name: 'Training',
        price: 220,
        active: false
      }]
    }
  },
  methods: {
    createTodo (newTodo) {
      this.todos.push(
        newTodo
      )
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
