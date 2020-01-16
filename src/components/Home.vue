<template>
  <KinesisContainer class="page home">
    <KinesisElement 
      class="home-intro"
      :type="'depth'"
      :strength="5">
      <span class="home-intro-row"><strong class="title">DAMIEN MAQUIGNON</strong></span>
      <span class="home-intro-row second">I'm a junior Web Developper !</span>
      <vue-typed-js 
        :backSpeed="50"
        :startDelay="0"
        :backDelay="2000"
        :loop="true"
        :typeSpeed="100"
        :strings="['React Js !', 'Symfony!', 'Vue Js !', 'Laravel !']">
        <span class="home-intro-row third">I like to do stuff with <span class="typing"></span></span>
      </vue-typed-js>
      <router-link to="/contact" class="contact-link">Me contacter !</router-link>
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

export default {
    props: ["mode"],
    components: {
      KinesisContainer,
      KinesisElement
    },
    data () {
      return {
        circles: [
          { color: ['#B9770E', '#FBEEE6'], top: '45%', left: '73%', width: '150px', height: '150px', strength: 40, class: 'circle'},
          { color: ['#196F3D', '#D4EFDF'], top: '55%', left: '10%', width: '90px', height: '120px', strength: 46, class: 'circle'},
          { color: ['#2874A6', '#85C1E9'], top: '18%', left: '20%', width: '105px', height: '105px', strength: 33, class: 'circle'},
          { color: ['#7D3C98', '#D2B4DE'], top: '70%', left: '30%', width: '75px', height: '75px', strength: 33, class: 'circle'},
          { color: ['#F4D03F', '#99A3A4'], top: '11%', left: '87%', width: '110px', height: '80px', strength: 65, class: 'circle'},
          { color: ['#117864', '#76D7C4'], top: '8%', left: '60%', width: '115px', height: '155px', strength: 40, class: 'circle'},
          { color: ['#616A6B', '#CCD1D1'], top: '70%', left: '59%', width: '95px', height: '95px', strength: 40, class: 'circle'},
          { color: ['#641E16', '#E6B0AA'], top: '75%', left: '7%', width: '124px', height: '94px', strength: 60, class: 'circle'},
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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

.home-intro-border {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 100px;
  z-index: 3;
}

.home-intro-row {
  font-size: 20px;
  z-index: 4;
  text-align: center;
}

.home-intro-row strong {
  font-size: 50px;
  text-shadow: 1px 1px #6b48ff
}

.typing {
  font-size: 23px !important;
}

.dark .typing {
  color: #2FCE7F
}

.light .typing {
  color: #6b48ff
}

.contact-link {
  font-size: 1.5rem;
  color: #011832;
  border: 2px solid #011832;
  margin-top: 4rem;
  padding: 10px 35px;
  z-index: 14;
  background-color: transparent;
  transition: all 0.5s;
}

.dark .contact-link {
  font-size: 1.5rem;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 10px 35px;
}

.contact-link:hover {
  color: #FFFFFF;
  background-color: #011832;
  text-decoration: none;
}

.contact-link:active {
  transform: scale(0.9);
}

.dark .contact-link:hover {
  color: #011832;
  border: 2px solid #011832;
  background-color: #FFFFFF;
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
    font-size: 70px;
    text-shadow: 1px 1px #6b48ff
  }
}

@media (min-width: 840px) {

  .home-intro-row strong {
    font-size: 90px;
  }
}

</style>
