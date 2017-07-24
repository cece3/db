<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="createTodo"></create-todo>
    <order-form v-bind:services="services"></order-form>
    <alert bold="Greetings." msg="This is some information." type="alert-info"></alert>
    <trend
    :data="trenddata"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
  <span>{{ legislators }}</span>
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
  mounted: function () {
    this.getLegislators('TX')
  },
  data () {
    return {
      legislators: 'default legistators',
      trenddata: [0, 9, 1, 10, 10, 10, 1, 1, 0, 0, 9, 8, 7, 8, 9],
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
    },
    getLegislators (state) {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {
        // alert(response.data)
        this.legislators = response.data[1].name
      }, response => {
        // error callback
        alert('error')
      })
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
