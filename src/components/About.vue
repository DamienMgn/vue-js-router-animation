<template>
  <section class="page">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <div class="about-container">
      <div class="about-section about-presentation">
        <h2 class="about-title">Je m’appelle Damien et je suis développeur web junior.</h2>
        <p class="presentation-p">
        Après avoir travaillé pendant 6 ans en tant que contrôleur de gestion / comptable, j’ai décidé en 2019 de me reconvertir dans le développement web.
        </p>
        <p class="presentation-p">
        Passionné par le monde du développement depuis plusieurs années, j’ai commencé par me former en autodidacte pendant mes études (<strong>HTML, CSS, PHP</strong>). J’ai ensuite continué à me former au cours de ma vie professionnelle en développant des applications / jeux simples en <strong>Javascript</strong>.
        </p>
        <p class="presentation-p">
        Pour réussir ma reconversion, de mai à octobre 2019, j’ai suivi une formation intensive Développeur Web et Web Mobile en téléprésentielle avec l’école <a href="https://oclock.io/" target="_blank" rel="noopener noreferrer">O’clock</a>. Formation qui m'a permis de consolider mes connaissances et de me spécialiser sur le framework <strong>Symfony 4</strong>.
        </p>
        <p class="presentation-p">
        Je travaille aussi avec le framework Laravel et les frameworks font-end comme <strong>React Js</strong> et <strong>Vue Js</strong>.
        </p>
        <div class="presentation-logos-container">
          <span class="logo-container"><img src="../assets/laravel.svg" alt="laravel"></span>
          <span class="logo-container"><img src="../assets/symfony.png" alt="symfony"></span>
          <span class="logo-container"><img src="../assets/react.svg" alt="react js"></span>
          <span class="logo-container"><img src="../assets/logo.png" alt="vue js"></span>
        </div>
        <p class="presentation-p">
        Pour finir, quand je ne suis pas en train de coder, j'aime lire des romans (principalement de science fiction), cuisiner et faire de l'escalade !
        </p>
        <div class="contact-container">
          <h3>Me contacter !</h3>
          <div class="contact-icon-container">
            <a class="contact-link" href="https://github.com/DamienMgn" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <span class="vertical-line"></span>
            <a class="contact-link" href="https://codepen.io/damienmgn" target="_blank" rel="noopener noreferrer">CODEPEN</a>
            <span class="vertical-line"></span>
            <a class="contact-link" href="https://fr.linkedin.com/in/damien-maquignon" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <span class="vertical-line"></span>
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
  },
  data () {
    return {
        circles: [
          { color: ['#0E6251', '#48C9B0'], top: '45%', left: '83%', width: '50px', height: '1px', strength: 40, class: 'circle'},
          { color: ['#0B5345', '#73C6B6'], top: '18%', left: '10%', width: '90px', height: '1px', strength: 46, class: 'circle'},
          { color: ['#0E6251', '#7DCEA0'], top: '18%', left: '20%', width: '1px', height: '105px', strength: 33, class: 'circle'},
          { color: ['#7D6608', '#F7DC6F'], top: '11%', left: '87%', width: '1px', height: '110px', strength: 65, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '75%', left: '7%', width: '1px', height: '94px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '75%', left: '79%', width: '89px', height: '1px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '89%', left: '66%', width: '100px', height: '1px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '33%', left: '81%', width: '1px', height: '100px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '69%', left: '89%', width: '1px', height: '100px', strength: 60, class: 'circle'},
          { color: ['#6E2C00', '#DC7633'], top: '35%', left: '21%', width: '1px', height: '100px', strength: 60, class: 'circle'},
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.about-container {
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 80%;
  margin: 1rem 2rem 1rem 2rem;
}

.presentation-p {
  width: 100%;
  height: 100%;
  text-align: justify;
  line-height: 2.5rem;
}

.presentation-p strong{
  text-decoration: underline;
}

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0rem 12rem 0rem
}

.contact-icon-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3rem 0rem 1rem 0rem
}

.light .about-section a {
  color: #6b48ff;
}

.dark .about-section a {
  color: #2FCE7F;
}

.vertical-line {
  width: 1px;
  height: 13px;
  background-color: #252c41;
}

.dark .vertical-line {
  background-color: #FFFFFF;
}

.contact-link {
  margin: 0 0.5rem;
  font-size: 1.1rem
}

.presentation-logos-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 3rem 0rem 4rem 0rem
}

.logo-container {
  border: 1px solid #252c41;
  padding: 1rem;
  margin: 1.5rem 1.5rem;
  transform: rotate(-45deg)
}

.dark .logo-container {
  border-color: #FFFFFF;
}

.logo-container img {
  width: 75px;
  height: 75px;
  transform: rotate(45deg)
}


@media (min-width: 540px) {
  .about-section {
    width: 70%;
    padding: 0px 1rem;
  }

  .about-container {
    margin-top: 5rem;
  }

  .contact-link {
    margin: 0 2rem;
  }
}

@media (min-width: 690px) {
  .about-section {
    width: 60%;
  }

  .about-container {
    margin-top: 6rem;
  }
}

@media (min-width: 840px) {
  .about-container {
    flex-direction: row;
    margin-top: 7rem;
  }

  .presentation-p {
    font-size: 1.1rem;
  }

}

@media (min-width: 990px) {
  .about-section {
    width: 50%;
  }

  .about-container {
    margin-top: 10rem;
  }

  .about-title {
    margin-bottom: 2rem;
  }
}
</style>
