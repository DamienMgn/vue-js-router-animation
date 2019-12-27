<template>
  <div id="app">
    <Header />
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Header from './layouts/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body {
  margin: 0;
  background: #202020;
}

.page {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0
}

#app {
  position: relative
}

.slide-enter-active {
  animation: coming 1s ease;
}

.slide-leave-active {
  animation: going 0.5s ease;
}

@keyframes coming {
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0)
  }
}

@keyframes going {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

</style>
