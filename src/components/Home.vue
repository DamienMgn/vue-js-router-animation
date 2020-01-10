<template>
    <KinesisContainer class="page home">
      <div class="home-intro">
        <span class="home-intro-row">Hi! I'm<strong> Damien</strong>, a junior <strong>Web Developper,</strong></span>
        <span class="home-intro-row">based in Caen, France.</span>
        <vue-typed-js :backSpeed="100" :startDelay="1000" :backDelay="2000" :loop="true" :typeSpeed="100" :strings="['React Js!', 'Symfony!', 'Vue Js!', 'Laravel!']">
          <span class="home-intro-row third">I like to do stuff with <strong><span class="typing"></span></strong></span>
        </vue-typed-js>
        <KinesisElement 
          class="circle" 
          v-for="(circle, index) in circles"
          v-bind:style="{ borderColor: circle.color, top: circle.top, left: circle.left, width: circle.width, height: circle.height }"
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
          { color: '#F1C40F', top: '35%', left: '85%', width: '35px', height: '35px', strength: 15},
          { color: '#E74C3C', top: '55%', left: '95%', width: '50px', height: '50px', strength: 20},
          { color: '#229954', top: '80%', left: '35%', width: '50px', height: '50px', strength: 36},
          { color: '#E67E22', top: '55%', left: '73%', width: '30px', height: '30px', strength: 20},
          { color: '#8E44AD', top: '70%', left: '10%', width: '17px', height: '17px', strength: 22},
          { color: '#8E44AD', top: '75%', left: '67%', width: '35px', height: '35px', strength: 30},
          { color: '#F1C40F', top: '45%', left: '15%', width: '30px', height: '30px', strength: 26},
          { color: '#E74C3C', top: '45%', left: '5%', width: '45px', height: '45px', strength: 27},
          { color: '#E67E22', top: '12%', left: '55%', width: '20px', height: '20px', strength: 45},
          { color: '#8E44AD', top: '18%', left: '25%', width: '55px', height: '55px', strength: 13},
          { color: '#229954', top: '15%', left: '5%', width: '35px', height: '35px', strength: 70},
          { color: '#F1C40F', top: '85%', left: '85%', width: '30px', height: '30px', strength: 26},
          { color: '#E74C3C', top: '95%', left: '3%', width: '45px', height: '45px', strength: 27},
          { color: '#E67E22', top: '9%', left: '95%', width: '20px', height: '20px', strength: 45},
          { color: '#229954', top: '23%', left: '67%', width: '35px', height: '35px', strength: 70},
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.home-intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 35px);  
}

.home-intro-row{
  font-size: 30px;
  z-index: 4;
  text-align: center;
}

.home-intro-row strong {
  color: #2b90d9;
  font-size: 35px
}

.third {
  font-size: 30px !important;
}

.typing {
  font-size: 35px !important;
}

.circle {
  opacity: 0.7;
  border-radius: 50%;
  position: absolute;
  z-index: 0;
  border: 5px solid;
}

@media (min-width: 840px) {
  .home-intro-row {
    font-size: 45px;
  }

  .home-intro-row strong {
    font-size: 50px
  }
}

</style>
