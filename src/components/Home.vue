<template>
  <KinesisContainer class="page home">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <KinesisElement 
      class="home-intro"
      :type="'depth'"
      :strength="10">
      <div class="home-presentation">
        <span class="home-intro-row"><strong class="title">Damien Maquignon</strong></span>
        <span class="home-intro-row second">Développeur Web Junior Spécialisé Symfony 4.</span>
        <vue-typed-js 
          :backSpeed="50"
          :startDelay="0"
          :backDelay="2000"
          :loop="true"
          :typeSpeed="100"
          :strings="['React Js !', 'Vue Js !', 'Laravel !', 'les pizzas !']">
          <span class="home-intro-row third">Mais j'aime aussi <span class="typing"></span></span>
        </vue-typed-js>
      </div>
      <router-link to="/about" class="home-button">Me contacter !</router-link>
      <KinesisElement 
        v-for="(circle, index) in circles"
        :class="circle.class"
        v-bind:style="{ top: circle.top, left: circle.left, width: circle.width, height: circle.height }"
        v-bind:key="index"
        :type="'translate'"
        :strength="circle.strength">
      </KinesisElement>
    </KinesisElement>
  </KinesisContainer>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import Header from '../layouts/Header.vue';

export default {
    props: ["mode"],
    components: {
      KinesisContainer,
      KinesisElement,
      Header
    },
    data () {
      return {
        circles: [
          { top: '45%', left: '73%', width: '50vw', height: '1px', strength: 40, class: 'circle'},
          { top: '18%', left: '10%', width: '50vw', height: '1px', strength: 46, class: 'circle'},
          { top: '18%', left: '20%', width: '1px', height: '75vh', strength: 33, class: 'circle'},
          { top: '70%', left: '3%', width: '50vw', height: '1px', strength: 33, class: 'circle'},
          { top: '11%', left: '87%', width: '1px', height: '75vh', strength: 65, class: 'circle'},
          { top: '21%', left: '60%', width: '50vw', height: '1px', strength: 40, class: 'circle'},
          { top: '70%', left: '59%', width: '1px', height: '75vh', strength: 40, class: 'circle'},
          { top: '7%', left: '7%', width: '1px', height: '75vh', strength: 60, class: 'circle'},
          { top: '75%', left: '79%', width: '50vw', height: '1px', strength: 60, class: 'circle'},
          { top: '89%', left: '66%', width: '50vw', height: '1px', strength: 60, class: 'circle'},
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.light .page {
  background: #EFEFF5;
  color: #22264A;
  transition: all 0.5s;
}

.dark .page{
  background: #22264A;
  color: #A0A5CF;
  transition: all 0.5s;
}

.page {
  min-height: calc(100vh + 105px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
}

.home-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: calc(100vh - 35px);  
}

.toggle-container {
  position: absolute;
  top: 20px;
  right: 2%;
  z-index: 30
}

.home-presentation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px 45px;
}

.home-intro-row {
  font-size: 1.1rem;
  z-index: 4;
  text-align: center;
  font-style: italic;
}

.home-intro-row strong {
  font-size: 3rem;
  font-weight: normal;
  font-style: normal;
  color: #100F4D;
}

.dark .home-intro-row strong {
  text-shadow: 1px 0 0 #FFCC68, -1px 0 0 #FFCC68, 0 1px 0 #FFCC68, 0 -1px 0 #FFCC68, 1px 1px #FFCC68, -1px -1px 0 #FFCC68, 1px -1px 0 #FFCC68, -1px 1px 0 #FFCC68;
  color: #22264A;
}

.typing {
  font-size: 1.2rem !important;
  color: #6b48ff
}

.dark .typing {
  color: #FFCC68
}

.home-button {
  font-size: 1.2rem;
  color: #FFCC68;
  border: 2px solid #FFCC68;
  margin-top: 1rem;
  padding: 10px 35px;
  z-index: 14;
  background-color: transparent;
  transition: all 0.5s;
  font-style: italic;
}

.light .home-button {
  color: #EFEFF5;
  border: 2px solid #6b48ff;
  background-color: #6b48ff;
}

.home-button:hover {
  color: #EFEFF5;
  background-color: #FFCC68;
  text-decoration: none;
}

.home-button:active {
  transform: scale(0.9);
}

.light .home-button:hover {
  transform: scale(1.05);
  background-color: #6b48ff;
}

.circle {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  display: none;
  background: linear-gradient(45deg, #FFCC68, #6b48ff);
}

@media (min-width: 325px) {
  .home-presentation {
    z-index: 3;
    border-radius: 2px;
    padding: 25px 45px;
    transition: border 0.5s;
  }

  .home-intro-row strong {
    font-size: 3.5rem;
  }
  .home-button {
    font-size: 0.7rem;
    margin-top: 4rem;
    padding: 10px 35px;
  }
}

@media (min-width: 595px) {

  .home-intro-row strong {
    font-size: 5.5rem;
  }

  .home-button {
    font-size: 0.9rem;
    margin-top: 4rem;
    padding: 10px 35px;
  }

  .page {
    min-height: 100vh;
  }
}

@media (min-width: 840px) {

  .circle {
    display: initial
  }

  .home-intro-row strong {
    font-size: 6rem;
  }

  .typing {
    font-size: 1.5rem;
  }

  .home-intro-row {
    font-size: 1.3rem;
  }

  .home-button {
    font-size: 1.1rem;
    margin: 3rem 0 4rem 0;
    padding: 10px 35px;
  }
}

</style>
