<template>
  <section class="page">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <div class="about-container">
      <div class="about-section about-presentation">
        <h3 class="about-title">Je m’appelle Damien et je suis développeur web junior.</h3>
        <p class="presentation-p">
        Après avoir travaillé pendant 6 ans en tant que contrôleur de gestion / comptable, j’ai décidé en 2019 de me reconvertir dans le développement web.
        </p>
        <p class="presentation-p">
        Passionné par le monde du développement depuis plusieurs années, j’ai commencé par me former en autodidacte pendant mes études (<strong>HTML, CSS, PHP</strong>). J’ai ensuite continué à me former au cours de ma vie professionnelle en développant des applications / jeux simples en <strong>Javascript</strong>.
        </p>
        <p class="presentation-p">
        Pour réussir ma reconversion, de mai à octobre 2019, j’ai suivi une formation intensive Développeur Web et Web Mobile en téléprésentielle avec l’école <a href="">O’clock</a>. Formation qui m'a permis de consolider mes connaissances et de me spécialiser sur le framework <strong>Symfony 4</strong>.
        </p>
        <p class="presentation-p">
        J'aime aussi travailler avec les frameworks font-end comme <strong>React Js</strong> et surtout <strong>Vue Js</strong>.
        </p>
        <p class="presentation-p">
        Pour finir, quand je ne suis pas en train de coder, je m’essaye à l’escalade à la cuisine et j'aime les romans principalement de science fiction !
        </p>
        <div class="contact-icon-container">
          <a class="contact-link" href="#">GITHUB</a>
          <span class="vertical-line"></span>
          <a class="contact-link" href="#">CODEPEN</a>
          <span class="vertical-line"></span>
          <a class="contact-link" href="#">LINKEDIN</a>
          <span class="vertical-line"></span>
          <a class="contact-link" href="#">MAIL</a>
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
  line-height: 2rem;
}

.contact-icon-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem 4rem 1rem;
}

.about-section a {
  color: #6b48ff;
}

.dark .about-section a {
  color: #2FCE7F;
}

.vertical-line {
  width: 1px;
  height: 13px;
  background-color: #011832;
}

.dark .vertical-line {
  background-color: #FFFFFF;
}

.contact-link {
  margin: 0 0.5rem;
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
    margin-top: 5rem;
  }
}

@media (min-width: 840px) {
  .about-container {
    flex-direction: row;
    margin-top: 5rem;
  }
}

@media (min-width: 990px) {
  .about-section {
    width: 50%;
  }

  .about-container {
    margin-top: 7rem;
  }

  .about-title {
    margin-bottom: 2rem;
  }
}
</style>
