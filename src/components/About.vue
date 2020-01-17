<template>
  <section class="page">
    <Header :mode="mode" @toggle="$emit('toggle')" />
    <div class="about-container">
      <div class="about-section about-presentation">
        <h3>Je m’appelle Damien et je suis développeur web junior en Normandie.</h3>
        <p class="presentation-p">
        Après avoir travaillé pendant 6 ans en tant que contrôleur de gestion / comptable, j’ai décidé en 2019 de me reconvertir dans le développement web.
        </p>
        <p class="presentation-p">
        Passionné par le monde du développement depuis plusieurs années, j’ai commencé par me former en autodidacte pendant mes études (HTML, CSS, PHP). J’ai ensuite continué à me former au cours de ma vie professionnelle en développant des applications / jeux simples en Javascript.
        </p>
        <p class="presentation-p">
        Pour réussir ma reconversion, de mai à octobre 2019, j’ai suivi une formation intensive Développeur Web et Web Mobile en téléprésentielle avec l’école <a href="">O’clock</a>. Formation qui m'a permis de consolider mes connaissances et de développer une approche plus professionnelle du métier.
        </p>
        <p class="presentation-p">
        Pour finir, quand je ne suis pas en train de coder, je m’essaye à l’escalade à la cuisine et j'aime les romans principalement de science fiction !
        </p>
        <div class="contact-icon-link-container">
          <a href="#">Github</a>
          <span class="vertical-line"></span>
          <a href="#">Codepen</a>
          <span class="vertical-line"></span>
          <a href="#">Linkedin</a>
          <span class="vertical-line"></span>
          <a href="#">Mail</a>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-section {
  height: 100%;
  width: 50%;
  margin: 1rem 2rem 1rem 2rem;
}

.presentation-p {
  width: 100%;
  height: 100%;
  text-align: justify;
  line-height: 2rem;
}

@media (min-width: 540px) {
  .about-container {
    flex-direction: row;
  }
}

@media (min-width: 840px) {

}
</style>
