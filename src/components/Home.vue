<template>
  <KinesisContainer class="page home">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <div class="home-intro">
      <KinesisElement class="home-presentation" :type="'depth'" :strength="10">
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
        <router-link to="/about" class="home-button">En savoir plus !</router-link>
      </KinesisElement>
    </div>
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
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.light .home {
  background: url('../assets/images/waves.svg');
  background-size: cover;
  color: #17202A;
  transition: all 0.5s;
}

.dark .home{
  background: url('../assets/images/waves_dark.svg');
  background-size: cover;
  color: #ABB2B9;
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
  transition: background-color 0.5s;
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
  color: #17202A;
  text-shadow: 1px 0 0 #17202A, -1px 0 0 #17202A, 0 1px 0 #17202A, 0 -1px 0 #17202A, 1px 1px #17202A, -1px -1px 0 #17202A, 1px -1px 0 #17202A, -1px 1px 0 #17202A;
  transition: color .5s;
}

.home-intro-row strong:hover {
  color: #F5F5F5;
  transition: color .5s;
}


.dark .home-intro-row strong:hover {
  color: #F5F5F5;
  transition: color .5s;
}

.dark .home-intro-row strong {
  text-shadow: 1px 0 0 #F5F5F5, -1px 0 0 #F5F5F5, 0 1px 0 #F5F5F5, 0 -1px 0 #F5F5F5, 1px 1px #F5F5F5, -1px -1px 0 #F5F5F5, 1px -1px 0 #F5F5F5, -1px 1px 0 #F5F5F5;
  color: #17202A;
  transition: color .5s;
}

.typing {
  font-size: 1.2rem !important;
  color: #0035C7
}

.dark .typing {
  color: #1ABC9C
}

.home-button {
  font-size: 1.2rem;
  color: #1ABC9C;
  border-radius: 50px;
  margin-top: 1rem;
  padding: 10px 35px;
  z-index: 14;
  background-color: transparent;
  transition: all 0.5s;
  font-style: italic;
  border: 2px solid #0035C7;
  color: #EFEFF5;
  background-color: #0035C7;
}

.dark .home-button {
  border: 2px solid #1ABC9C;
  color: #EFEFF5;
  background-color: #1ABC9C;
}

.home-button:hover {
  border: 2px solid #1ABC9C;
  background-color: #16202A;
  color: #1ABC9C;
}

.home-button:active {
  transform: scale(0.9);
}

.light .home-button:hover {
  border: 2px solid #0035C7;
  background-color: #F5F5F5;
  color: #0035C7;
}

.circle {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  display: none;
  background: linear-gradient(45deg, #1ABC9C, #0035C7);
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
    font-size: 4.5rem;
  }

  .home-button {
    font-size: 0.9rem;
    margin-top: 4rem;
    padding: 1rem 35px;
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
    font-size: 5rem;
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
    padding: 1rem 3rem;
  }
}

</style>
