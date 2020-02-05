<template>
  <section class="page about">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <div class="about-container">
      <div class="about-section about-presentation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path class="elementor-shape-fill" d="M0,0c0,0,0,6,0,6.7c0,18,240.2,93.6,615.2,92.6C989.8,98.5,1000,25,1000,6.7c0-0.7,0-6.7,0-6.7H0z"></path> </svg>
        <h2 class="about-title">Je m’appelle Damien et je suis développeur web junior.</h2>
        <p class="presentation-p">
        Après avoir travaillé pendant 6 ans en tant que contrôleur de gestion / comptable, j’ai décidé en 2019 de me reconvertir dans le développement web.
        </p>
        <p class="presentation-p">
        Passionné par le monde du développement que j'ai pu découvrir pendant mes études, j’ai commencé par me former en autodidacte (<strong>HTML, CSS, PHP</strong>). J’ai ensuite continué à me former au cours de ma vie professionnelle en développant des applications / jeux en <strong>Javascript</strong>.
        </p>
        <p class="presentation-p">
        Pour réussir ma reconversion, de mai à octobre 2019, j’ai suivi une formation intensive Développeur Web et Web Mobile en téléprésentielle avec l’école <a href="http://wiwatt.fr/" target="_blank" rel="noopener noreferrer">O’clock</a>. Formation qui m'a permis de consolider mes connaissances et de me spécialiser sur le framework <strong>Symfony 4</strong>. Nous avons eu l'occasion de réaliser un projet de fin de formation entièrement en Symfony <a href="https://oclock.io/" target="_blank" rel="noopener noreferrer">Wiwatt.fr</a> et d'en faire la <a href="https://youtu.be/NRrQdTIMyYA?t=3989" target="_blank" rel="noopener noreferrer">présentation</a> sur Twitch.
        </p>
        <p class="presentation-p">
        J'apprécie également travailler avec le framework Laravel et les frameworks front-end comme <strong>React Js</strong> et <strong>Vue Js</strong>.
        </p>
        <div class="presentation-logos-container">
          <span class="logo-container"><img src="../assets/images/laravel.svg" alt="laravel"></span>
          <span class="logo-container"><img src="../assets/images/symfony.png" alt="symfony"></span>
          <span class="logo-container"><img src="../assets/images/react.svg" alt="react js"></span>
          <span class="logo-container"><img src="../assets/images/logo.png" alt="vue js"></span>
        </div>
        <p class="presentation-p">
        Pour finir, quand je ne code pas, je lis (principalement de la science fiction), j'aime cuisiner et faire de l'escalade !
        </p>
        <div class="contact-container">
          <h3 class="contact-title">Pour me contacter ou jeter un oeil à mes projets :</h3>
          <div class="contact-link-container">
            <a class="contact-link" href="https://github.com/DamienMgn" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a class="contact-link" href="https://codepen.io/damienmgn/pens/public" target="_blank" rel="noopener noreferrer">CODEPEN</a>
            <a class="contact-link" href="https://fr.linkedin.com/in/damien-maquignon" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a class="contact-link" href="mailto:maquignondm@gmail.com" target="_blank" rel="noopener noreferrer">MAIL</a>
          </div>
        </div>
        <div 
        v-for="(circle, index) in circles"
        :class="circle.class"
        v-bind:style="{ top: circle.top, left: circle.left, width: circle.width, height: circle.height }"
        v-bind:key="index">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Header from '../layouts/Header.vue';

export default {
  props: ["mode"],
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


/* ******LIGHT******* */

/* ******About******* */

.light .about {
  background: #F5F5F5;
  color: #17202A;
}

.about-container {
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #EFEFF5;
  transition: all 0.5s;
}

.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 2px;
  position: relative;
  height: 100%;
  width: 80%;
  padding: 1rem 1.5rem;
  margin: 1rem 2rem 7rem 2rem;
  background-color: #F5F5F5;
  z-index: 1;
  transition: all 0.5s;
}

.about-section svg {
  width: 100vw;
  transform: rotate(180deg);
  position: absolute;
  top: -6rem;
  left: -15vw;
  min-height: 6rem;
  z-index: 0;
  fill: #EFEFF5;
  transition: fill 0.5s;
}

.about-title {
   z-index: 1;
   color: #0035C7;
   transition: color 0.5s;
}

.presentation-p {
  width: 100%;
  height: 100%;
  text-align: justify;
  line-height: 2.5rem;
  font-weight: 400 !important;
}

.presentation-p a {
  color: #0035C7;
}

.presentation-p strong{
  font-weight: 500 !important;
}

.presentation-logos-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem 4rem 0rem;
  padding: 1rem 0rem;
  border-top: 1px solid #0035C7;
  border-bottom: 1px solid #0035C7;
}


.logo-container {
  border: 1px solid ; 
  padding: 1rem;
  margin: 1.5rem 1.5rem;
  transform: rotate(-45deg);
  border-radius: 15px;
}

.logo-container img {
  width: 75px;
  height: 75px;
  transform: rotate(45deg);
  margin: 0;
}

/* ******Contact******* */

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem 5rem 0rem;
  padding: 2rem 1rem;
  border-radius: 15px;
  border: 2px solid #0035C7;
}

.contact-title {
  color: #17202A;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}

.contact-link-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 3rem 0rem 1rem 0rem;
}

.contact-link {
  margin: 0.1rem 0.1rem;
  font-size: 1.1rem;
  color: #EFEFF5;
  background: #0035C7;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}

.contact-link:hover {
  color: #EFEFF5;
}

/* ******DARK******* */

/* ******About******* */

.dark .about {
  background: #17202A;
  color: #ABB2B9;
}

.dark .about-container {
  background-color: #273746;
}

.dark .about-section {
  background-color: #17202A;
}

.dark .about-section svg {
  fill: #273746;
}

.dark .about-title {
   z-index: 1;
   color: #1ABC9C;
}

.dark .presentation-p a {
  color: #1ABC9C;
}

.dark .presentation-logos-container {
  border-color: #1ABC9C;
}

/* ******Contact******* */

.dark .contact-container {
  border: 2px solid #1ABC9C;
}

.dark .contact-title {
  color: #ABB2B9;
}

.dark .contact-link {
  background: #1ABC9C;
  color: #EFEFF5;
}

@media (min-width: 540px) {
  .about-section {
    width: 70%;
    padding: 1rem 1.5rem;
  }

  .about-container {
    margin-top: 10rem;
  }

  .contact-link {
    margin: 0.5rem 0.5rem;
  }
}

@media (min-width: 690px) {
  .about-section {
    width: 70%;
    padding: 2rem 3rem;
  }

  .contact-link {
    margin: 0.5rem 1rem;
  }
}

@media (min-width: 840px) {

  .about-container {
    flex-direction: row;
  }

  .presentation-p {
    font-size: 1.1rem;
  }

  .contact-link {
    margin: 0.5rem 2rem;
  }

  .contact-title {
    font-size: 1.7rem
  }

  .logo-container {
    margin: 2rem 4rem 2rem 4rem;
  }

}

@media (min-width: 990px) {
  .about-section {
    width: 60%;
    padding: 3rem 5rem;
  }

  .about-container {
    margin-top: 10rem;
  }

  .about-title {
    margin-bottom: 2rem;
    margin-top: 5rem;
  }

  .contact-container {
    min-height: 35vh;
  }
}
</style>
