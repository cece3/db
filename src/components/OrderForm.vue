<template>
<div class="container">
  <form id="main" v-cloak>
    <h1>Services</h1>

    <ul>
        <!-- Loop through the services array, assign a click handler, and set or
             remove the "active" css class if needed -->
        <li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
            <!-- Display the name and price for every entry in the array .
                Vue.js has a built in currency filter for formatting the price -->
            {{service.name}} <span>{{service.price | currency}}</span>
        </li>
    </ul>

    <div class="total">
        <!-- Calculate the total price of all chosen services. Format it as currency. -->
        Total: <span>{{total() | currency }}</span>
    </div>
  </form>
  
  </div>
</template>

<script>
export default {
  props: ['services'],
  methods: {
    toggleActive: function (s) {
      s.active = !s.active
    },
    total: function () {
      var total = 0
      this.services.forEach(function (s) {
        if (s.active) {
          total += s.price
        }
      })
      return total
    }
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Cookie);

/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

/*-------------------------
    The order form
--------------------------*/

form{
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 500px;
    padding: 35px 60px;
    margin: 50px auto;
}

form h1{
    color:#fff;
    font-size:64px;
    font-family:'Cookie', cursive;
    font-weight: normal;
    line-height:1;
    text-shadow:0 3px 0 rgba(0,0,0,0.1);
}

form ul{
    list-style:none;
    color:#fff;
    font-size:20px;
    font-weight:bold;
    text-align: left;
    margin:20px 0 15px;
}

form ul li{
    padding:20px 30px;
    background-color:#e35885;
    margin-bottom:8px;
    box-shadow:0 1px 1px rgba(0,0,0,0.1);
    cursor:pointer;
}

form ul li span{
    float:right;
}

form ul li.active{
    background-color:#8ec16d;
}

div.total{
    border-top:1px solid rgba(255,255,255,0.5);
    padding:15px 30px;
    font-size:20px;
    font-weight:bold;
    text-align: left;
    color:#fff;
}

div.total span{
    float:right;
}
</style>
