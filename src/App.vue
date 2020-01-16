<template>
  <div id="app" v-bind:class="mode">
    <Header :mode="mode" v-on:toggle="toggle" />
    <transition name="slide" mode="out-in">
        <router-view :mode="mode"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>

import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      mode: "light"
    };
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Open Sans Condensed', sans-serif !important;
}

.light {
  background: #FFFFFF;
  color: #011832;
  transition: all 0.5s;
}

.dark {
  background-color: #011832;
  color: #FFFFFF;
  transition: all 0.5s;
}

#app {
  position: relative
}

.slide-enter-active {
  animation: coming 0.3s ease;
}

.slide-leave-active {
  animation: going 0.4s ease;
}

@keyframes coming {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes going {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}

</style>
