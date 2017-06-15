<template>
  <nav class="nav">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
      </a>
    </div>

    <div class="nav-center">
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-github"></i>
        </span>
      </a>
      <a class="nav-item">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
    </div>

    <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
    <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <!-- This "nav-menu" is hidden on mobile -->
    <!-- Add the modifier "is-active" to display it on mobile -->
    <div class="nav-right nav-menu">
      <a class="nav-item">
        <router-link to='/'>
        Home
      </router-link>
      </a>
      <a class="nav-item">
        Documentation
      </a>
      <a class="nav-item">
        <router-link to='/signup'>
        Register
      </router-link>
      </a>
      <router-link to='/signin'>
      <div class="nav-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" >
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span>Login</span>
            </a>
          </p>
        </div>
      </div>
    </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
