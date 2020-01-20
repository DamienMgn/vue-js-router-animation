<template>
  <KinesisContainer class="page home">
    <div class="toggle-container">
      <Toggle @toggle="$emit('toggle')"/>
    </div>
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
      <router-link to="/about" class="home-button">A propos</router-link>
      <router-link to="/projects" class="home-button">Mes Réalisations</router-link>
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
import Toggle from '../layouts/Toggle.vue'

export default {
    props: ["mode"],
    components: {
      KinesisContainer,
      KinesisElement,
      Toggle
    },
    data () {
      return {
        circles: [
          { color: ['#0E6251', '#48C9B0'], top: '45%', left: '73%', width: '50vw', height: '1px', strength: 40, class: 'circle'},
          { color: ['#0B5345', '#73C6B6'], top: '18%', left: '10%', width: '50vw', height: '1px', strength: 46, class: 'circle'},
          { color: ['#0E6251', '#7DCEA0'], top: '18%', left: '20%', width: '1px', height: '75vh', strength: 33, class: 'circle'},
          { color: ['#186A3B', '#82E0AA'], top: '70%', left: '3%', width: '50vw', height: '1px', strength: 33, class: 'circle'},
          { color: ['#7D6608', '#F7DC6F'], top: '11%', left: '87%', width: '1px', height: '75vh', strength: 65, class: 'circle'},
          { color: ['#7E5109', '#F5B041'], top: '8%', left: '60%', width: '50vw', height: '1px', strength: 40, class: 'circle'},
          { color: ['#784212', '#EB984E'], top: '70%', left: '59%', width: '1px', height: '75vh', strength: 40, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '7%', left: '7%', width: '1px', height: '75vh', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '75%', left: '79%', width: '50vw', height: '1px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '89%', left: '66%', width: '50vw', height: '1px', strength: 60, class: 'circle'},
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.light .page {
  background: #FFFFFF;
  color: #252c41;
  transition: all 0.5s;
}

.dark .page{
  background: #252c41;
  color: #FFFFFF;
  transition: all 0.5s;
}

.page {
  min-height: 100vh;
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
  font-size: 1rem;
  z-index: 4;
  text-align: center;
  font-style: italic;
}

.home-intro-row strong {
  font-size: 2.3rem;
  font-weight: normal;
  font-style: normal;
}

.typing {
  font-size: 1.2rem !important;
  color: #6b48ff
}

.dark .typing {
  color: #2FCE7F
}

.home-button {
  font-size: 1.2rem;
  color: #2FCE7F;
  border: 2px solid #2FCE7F;
  margin-top: 1rem;
  padding: 10px 35px;
  z-index: 14;
  background-color: transparent;
  transition: all 0.5s;
  font-style: italic;
}

.light .home-button {
  color: #6b48ff;
  border: 2px solid #6b48ff;
}

.home-button:hover {
  color: #FFFFFF;
  background-color: #2FCE7F;
  text-decoration: none;
}

.home-button:active {
  transform: scale(0.9);
}

.light .home-button:hover {
  color: #FFFFFF;
  border: 2px solid #6b48ff;
  background-color: #6b48ff;
  text-decoration: none;
}

.circle {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  display: none;
  background: linear-gradient(45deg, #2FCE7F, #6b48ff);
}

@media (min-width: 325px) {
  .home-presentation {
    border: 3px solid #FFFFFF;
    z-index: 3;
    border-radius: 2px;
    padding: 25px 45px;
    transition: border 0.5s;
    box-shadow: -1px 1px 5px gray;
  }

  .dark .home-presentation {
    border: 3px solid #252c41;
  }

  .home-button {
    font-size: 0.7rem;
    margin-top: 4rem;
    padding: 10px 35px;
  }
}

@media (min-width: 540px) {

  .home-intro-row strong {
    font-size: 2.6rem;
    text-shadow: 1px 1px #6E2C00
  }

  .home-button {
    font-size: 0.9rem;
    margin-top: 4rem;
    padding: 10px 35px;
  }
}

@media (min-width: 840px) {

  .circle {
    display: initial
  }

  .home-intro-row strong {
    font-size: 4rem;
  }

  .second {
    font-size: 1.1rem;
  }

  .home-button {
    font-size: 1.1rem;
    margin-top: 4rem;
    padding: 10px 35px;
  }
}

</style>
