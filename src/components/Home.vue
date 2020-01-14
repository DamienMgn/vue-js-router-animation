<template>
    <KinesisContainer class="page home">
      <div class="home-intro">
        <span class="home-intro-row title"><strong>DAMIEN MAQUIGNON</strong></span>
        <span class="home-intro-row second">I'm a junior Web Developper !</span>
        <vue-typed-js 
          :backSpeed="50"
          :startDelay="0"
          :backDelay="2000"
          :loop="true"
          :typeSpeed="100"
          :strings="['React Js !', 'Symfony !', 'Vue Js !', 'Laravel !']">
          <span class="home-intro-row third">I like to do stuff with <span class="typing"></span></span>
        </vue-typed-js>
        <router-link to="/contact" class="contact-link">Me contacter !</router-link>
        <KinesisElement 
          v-for="(circle, index) in circles"
          :class="circle.class"
          v-bind:style="{ background: 'linear-gradient(45deg, ' + circle.color[0] + ', ' + circle.color[1] + ')', top: circle.top, left: circle.left, width: circle.width, height: circle.height }"
          v-bind:key="index"
          :strength="circle.strength">
        </KinesisElement>
      </div>
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
          { color: ['#ffdc34', '#6b48ff'], top: '55%', left: '95%', width: '40px', height: '40px', strength: 40, class: 'circle'},
          { color: ['#ffdc34', '#6b48ff'], top: '55%', left: '73%', width: '50px', height: '50px', strength: 40, class: 'circle'},
          { color: ['#6b48ff', '#2FCE7F'], top: '45%', left: '15%', width: '40px', height: '40px', strength: 46, class: 'circle'},
          { color: ['#ffdc34', '#2FCE7F'], top: '18%', left: '25%', width: '35px', height: '35px', strength: 33, class: 'circle'},
          { color: ['#2FCE7F', '#ffdc34'], top: '15%', left: '5%', width: '65px', height: '65px', strength: 90, class: 'circle'},
          { color: ['#2FCE7F', '#6b48ff'], top: '79%', left: '23%', width: '55px', height: '55px', strength: 47, class: 'circle'},
          { color: ['#6b48ff', '#2FCE7F'], top: '21%', left: '87%', width: '50px', height: '50px', strength: 65, class: 'circle'},
          { color: ['#6b48ff', '#2FCE7F'], top: '23%', left: '67%', width: '75px', height: '75px', strength: 90, class: 'circle'},
          { color: ['#2FCE7F', '#ffdc34'], top: '80%', left: '59%', width: '35px', height: '35px', strength: 90, class: 'circle'},
          { color: ['#ffdc34', '#2FCE7F'], top: '95%', left: '7%', width: '48px', height: '48px', strength: 90, class: 'circle'},
          { color: ['#ffdc34', '#6b48ff'], top: '90%', left: '17%', width: '42px', height: '42px', strength: 90, class: 'circle'},
          { color: ['#ffdc34', '#6b48ff'], top: '85%', left: '87%', width: '75px', height: '75px', strength: 90, class: 'circle'},
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
  min-height: calc(100vh - 35px);  
}

.home-intro-row {
  font-size: 30px;
  z-index: 4;
  text-align: center;
}

.home-intro-row strong {
  font-size: 80px;
  text-shadow: 1px 1px #6b48ff
}

.second {
  font-size: 21px !important;
}

.third {
  font-size: 21px !important;
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
  border-color: #FFFFFF;
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
  display: none
}

@media (min-width: 540px) {
  .circle {
    display: initial
  }
}

@media (min-width: 840px) {
  .home-intro-row {
    font-size: 45px;
  }

  .home-intro-row strong {
    font-size: 90px;
  }
}

</style>
