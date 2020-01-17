<template>
  <KinesisContainer class="page home">
    <div class="toggle-container">
      <Toggle @toggle="$emit('toggle')"/>
    </div>
    <KinesisElement 
      class="home-intro"
      :type="'depth'"
      :strength="5">
      <div class="home-presentation">
        <span class="home-intro-row"><strong class="title">Damien Maquignon</strong></span>
        <span class="home-intro-row second">je suis Développeur Web Junior Spécialisé Symfony 4.</span>
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
      <router-link to="/about" class="contact-link">A propos !</router-link>
      <router-link to="/projects" class="contact-link">Mes Réalisations !</router-link>
      <KinesisElement 
        v-for="(circle, index) in circles"
        :class="circle.class"
        v-bind:style="{ background: 'linear-gradient(45deg, ' + circle.color[0] + ', ' + circle.color[1] + ')', top: circle.top, left: circle.left, width: circle.width, height: circle.height }"
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
          { color: ['#B9770E', '#FBEEE6'], top: '45%', left: '73%', width: '50px', height: '50px', strength: 40, class: 'circle'},
          { color: ['#196F3D', '#D4EFDF'], top: '5%', left: '10%', width: '90px', height: '120px', strength: 46, class: 'circle'},
          { color: ['#2874A6', '#85C1E9'], top: '18%', left: '20%', width: '105px', height: '105px', strength: 33, class: 'circle'},
          { color: ['#6b48ff', '#D2B4DE'], top: '70%', left: '30%', width: '75px', height: '75px', strength: 33, class: 'circle'},
          { color: ['#ffdc34', '#99A3A4'], top: '11%', left: '87%', width: '110px', height: '80px', strength: 65, class: 'circle'},
          { color: ['#212F3C', '#2FCE7F'], top: '8%', left: '60%', width: '115px', height: '155px', strength: 40, class: 'circle'},
          { color: ['#616A6B', '#CCD1D1'], top: '70%', left: '59%', width: '95px', height: '95px', strength: 40, class: 'circle'},
          { color: ['#E74C3C', '#E6B0AA'], top: '75%', left: '7%', width: '124px', height: '94px', strength: 60, class: 'circle'},
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.light .page {
  background: #F1F1F1;
  color: #011832;
  transition: all 0.5s;
}

.dark .page{
  background-color: #011832;
  color: #F1F1F1;
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
  border: 2px solid #FFFFFF;
  z-index: 3;
  border-radius: 2px;
  padding: 25px 45px;
  transition: border 0.5s;
}

.dark .home-presentation {
  border: 2px solid #001329;
}

.home-intro-row {
  font-size: 18px;
  z-index: 4;
  text-align: center;
  font-style: italic;
}

.home-intro-row strong {
  font-size: 50px;
  font-weight: normal;
  font-style: normal;
}

.typing {
  font-size: 23px !important;
  color: #6b48ff
}

.dark .typing {
  color: #2FCE7F
}

.contact-link {
  font-size: 1.2rem;
  color: #011832;
  border: 2px solid #011832;
  margin-top: 4rem;
  padding: 10px 35px;
  z-index: 14;
  background-color: transparent;
  transition: all 0.5s;
}

.dark .contact-link {
  color: #F1F1F1;
  border: 2px solid #F1F1F1;
}

.contact-link:hover {
  color: #F1F1F1;
  background-color: #011832;
  text-decoration: none;
}

.contact-link:active {
  transform: scale(0.9);
}

.dark .contact-link:hover {
  color: #011832;
  border: 2px solid #011832;
  background-color: #F1F1F1;
  text-decoration: none;
}

.circle {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  display: none;
}

@media (min-width: 540px) {
  .circle {
    display: initial
  }

  .home-intro-row strong {
    font-size: 50px;
    text-shadow: 1px 1px #6b48ff
  }
}

@media (min-width: 840px) {

  .home-intro-row strong {
    font-size: 70px;
  }

  .second {
    font-size: 18px;
  }
}

</style>
