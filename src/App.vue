<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family:  sans-serif,Arial,"monospace",'Avenir',Helvetica,"Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: 1.2rem;
  padding-left: 2rem;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
