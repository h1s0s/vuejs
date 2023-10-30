<template>
  <div id="app">
    <MainHeader /><!--우리가 임포트한 헤더를 사용하는 거임, 한줄로 보이지만 아님-->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainHeader// 여기에 import name을 써야 쓸 수 있음.
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
