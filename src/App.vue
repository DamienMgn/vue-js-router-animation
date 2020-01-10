<template>
  <div id="app" v-bind:class="mode">
    <Header :mode="mode" v-on:toggle="toggle" />
    <transition name="slide" mode="out-in">
        <router-view :mode="mode"></router-view>
    </transition>
    <Footer :mode="mode" />
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
  font-family: 'Source Sans Pro', sans-serif !important;
}

.page {
  min-height: calc(100vh - 35px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}

.light {
  background-color: #FFFFFF;
  color: #282c37;
}

.dark {
  background-color: #282c37;
  color: #FFFFFF;
}

#app {
  position: relative
}

.slide-enter-active {
  animation: coming 0.3s ease;
}

.slide-leave-active {
  animation: going 0.3s ease;
}

@keyframes coming {
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
}

@keyframes going {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}

</style>
