<template>
  <div id="app">
    <alert bold="TODO List: " msg="Unformatted todo list.  Copied (needed tweaking) from online tutorial" type="alert-info"></alert>
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="createTodo"></create-todo>
    <alert bold="Order form: " msg="Example of using a filter" type="alert-info"></alert>
    <order-form v-bind:services="services"></order-form>
    <alert bold="Trend data: " msg="Example of using VueTrend and Chartkick" type="alert-info"></alert>
    <trend
    :data="trenddata"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  <alert bold="Vertical Chart: " msg="Example of another chart type.  Static data for now." type="alert-info"></alert>
  <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
  <alert bold="HTTP Get: " msg="Example of getting data via http on page load (mounted) and dynamically replacing data" type="alert-info"></alert>
  <span>{{ incidents }}</span>
  <alert bold="Google maps: " msg="Example google maps (hardcoded data)" type="alert-info"></alert>
  <gmap-map
    :center="center"
    :zoom="10"
    style="width: 500px; height: 300px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
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
    this.getincidents('TX')
  },
  data () {
    return {
      incidents: ['placeholder for police incidents in austin'],
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
      }],
      center: {lat: 30.2672, lng: -97.7431},
      markers: [{
        position: {lat: 30.301911, lng: -97.777739}
      }]
    }
  },
  methods: {
    createTodo (newTodo) {
      this.todos.push(
        newTodo
      )
    },
    getincidents (state) {
      this.$http.get('https://data.policefoundation.org/resource/iibt-hvrs.json').then(response => {
        var returnedincidents = response.data
        var i
        for (i = 0; i < 1; i++) {
          this.incidents.push(returnedincidents[i].address)
          // geocode the address
          this.geocode(returnedincidents[i].address + ', Austin, TX')
        }
        // this.incidents = response.data[1].address
      }, response => {
        // error callback
        alert('getincidents Error: ' + response)
      })
    },
    geocode (address) {
      let query
      query = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCRszFuoL7Wk2wZrbYuWPn2ESgIX_PCQ3s`
      fetch(`${query}`)
          .then(response => {
            if (response.status !== 200) {
              return
            }
            response.json().then(data => {
              // if (!data.length) {
                // alert('error with data length' + data.results)
                // return
              // }
              console.dir(data.results[0].geometry.location.lat)
            })
          })
          .catch(() => {
            alert('caught error')
          })
      return 0
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
