<template>
    <div class="page project">
      <Header :mode="mode" @toggle="$emit('toggle')" />
      <div class="about-container">
        <div class="about-section projects-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"> <path class="elementor-shape-fill" d="M0,0c0,0,0,6,0,6.7c0,18,240.2,93.6,615.2,92.6C989.8,98.5,1000,25,1000,6.7c0-0.7,0-6.7,0-6.7H0z"></path> </svg>
            <div v-for="slide in slides" :key="slide.key" class="slide">
              <div class="slide-img" :class="slide.class">
              </div>
              <div class="slide-content" :style="{borderColor: slide.color}">
                <h3 class="slide-title" >{{slide.title}}</h3>
                <div class="tools-container">
                  <span v-for="tool in slide.tools" :key="tool" class="tool">{{tool}}</span>
                </div>
                <p>{{slide.content}}</p>
                <a target="_blank" rel="noopener noreferrer" :href="slide.link" class="slide-link">GO</a>
              </div>
            </div>
          </div>
      </div>
    </div>
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
      slides: [
        {
          key: 1,
          title: 'Wiwatt.fr',
          content: 'Projet de fin de formation réalisé en équipe de 4 personnes, wiwatt.fr est un site de location de véhicule électrique entre particulier.',
          class: 'first-project',
          tools: ['Symfony 4'],
          link: 'http://wiwatt.fr/'
        },
        {
          key: 2,
          title: 'Organize your Book',
          content: 'Application permettant de classer ses livres en 3 catégories : Livre à lire, livre lu et livre à acheter.',
          class: 'second-project',
          tools: ['Laravel', 'React Js', 'Redux'],
          link: 'https://react-redux-app-books.netlify.com/'
        },
        {
          key: 3,
          title: 'Mon portfolio',
          content: 'Le site sur lequel vous naviguez a été créé entièrement avec le framework VueJS.',
          class: 'third-project',
          tools: ['Vue Js'],
          link: 'https://www.damienmaquignon.com/'
        },
        {
          key: 4,
          title: 'Mes autres projets',
          content: 'Pour avoir un aperçu de mes autres projets n\'hésithez pas à visiter mon Github !',
          class: 'fourth-project',
          tools: ['Symfony 4', 'Laravel', 'React Js', 'Redux', 'Vue Js'],
          link: 'https://github.com/DamienMgn'
        },
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.dark .project {
  background: #17202A;
  color: #ABB2BA;
  transition: all 0.5s;
}

.light .project {
  background: #F5F5F5;
  color: #17202A;
  transition: all 0.5s;
}

.projects-container {
  display: flex;
  justify-content: center;
}

.slides-container {
  margin: 5rem 0rem;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slide {
  margin: 4rem 0;
}

.slide-img {
  width: 100%;
  height: 15rem;
  border-radius: 15px 15px 0px 0px 
}

.first-project {
  background:  url('../assets/images/wiwatt2-ConvertImage.png');
  background-size: cover;
}

.second-project {
  background: url('../assets/images/book.png');
  background-size: cover;
}

.third-project {
  background: url('../assets/images/portfolio.png');
  background-size: cover;
}

.fourth-project {
  background: url('../assets/images/code.jpeg');
  background-size: cover;
}

.slide-content {
  min-height: 16rem;
  background: linear-gradient(-45deg, rgba(22, 32, 42, 1), rgba(22, 32, 42, 0.5));
  color: #EFEFF5;
  border-bottom: 5px solid #6B48FF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: 300;
}

.dark .slide-content {
  background: linear-gradient(-45deg, rgba(39, 55, 70, 1), rgba(255, 255, 255, 0.1));
  border-bottom: 5px solid #1AB899;
  color: #ABB2BA
}

.slide-content p {
  text-align: center;
  margin: 0;
}

.slide-title {
  margin: 0;
}

.tool {
  font-style: italic;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  text-decoration: underline;
}

.slide-link {
  color: #EFEFF5;
  border: 1px solid #EFEFF5;
  padding: 0.5rem 3rem;
  background-color: transparent;
  transition: all 0.4s;
  border-radius: 2px;
}

.slide-link:hover {
  color: #EFEFF5;
  text-decoration: none;
  transform: scale(1.05);
}

.slide-link:active {
  text-decoration: none;
  transform: scale(0.95)
}

@media (min-width: 540px) {

  .slide {
    margin: 4rem;
  }

}
@media (min-width: 992px) {
  
  .slide {
    font-size: 1.1rem;
    margin: 4rem 0rem !important;
  }

}
</style>