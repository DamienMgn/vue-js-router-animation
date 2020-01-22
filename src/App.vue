<template>
  <div id="app" v-bind:class="mode">
    <transition name="slide" mode="out-in">
        <router-view @toggle="toggle" :mode="mode"></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>

import Footer from './layouts/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer
  },
  data() {
    return {
      mode: "dark"
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

html {
  background-color: #424949;
}

body {
  margin: 0;
}

#app {
  position: relative;
  background-color: #424949;
}

.slide-enter-active {
  animation: coming 0.8s ease;
}

.slide-leave-active {
  animation: going 0.8s ease;
}

@keyframes coming {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes going {
  0% {
  }
  50% {
    transform: scale(0.9)
  }
  100% {
    transform: translateX(100%);
  }
}

</style>
