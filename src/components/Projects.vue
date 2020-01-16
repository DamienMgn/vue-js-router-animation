<template>
    <div class="page">
      <div class="projects-container">
        <agile class="projects" :dots="false">
          <template slot="prevButton">prec.</template>
            <div v-for="slide in slides" :key="slide.key" class="slide" :class="slide.class">
              <div class="slide-content" :style="{borderColor: slide.color}">
                <h3 class="slide-title" :style="{borderColor: slide.color}">{{slide.title}}</h3>
                <p>{{slide.content}}</p>
                <a :href="slide.link" class="slide-link">GO</a>
              </div>
            </div>
          <template slot="nextButton">suiv.</template>
        </agile>
      </div>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
	components: {
		agile: VueAgile,
	},
  data () {
    return {
      slides: [
        {
          key: 1,
          title: 'Wiwatt.fr',
          content: 'Projet de fin de formation réalisé en équipe de 4 personnes, wiwatt.fr est un site de location de véhicule électrique développé entièrement avec le framework Symfony 4.',
          color: '#6b48ff',
          class: 'first-project',
          link: 'http://wiwatt.fr/'
        },
        {
          key: 2,
          title: 'Organize your Book',
          content: 'Application développé avec React/Redux pour le Front-End et Laravel pour le Back-End. Cette application permet de classer ses livres en 3 catégories : Livre à lire, livre lu et livre à acheter. Api : Google Books',
          color: '#ffdc34',
          class: 'second-project',
          link: 'https://react-redux-app-books.netlify.com/'
        },
        {
          key: 3,
          title: 'Mon portfolio',
          content: 'Le site sur lequel vous naviguez a été créé entièrement avec le framework VueJS.',
          color: '#2FCE7F',
          class: 'third-project',
          link: 'https://github.com/DamienMgn'
        },
        {
          key: 4,
          title: 'Mes autres projets',
          content: 'Pour avoir un aperçu de mes autres projets n\'hésithez pas à visiter mon Github !',
          color: '#E74C3C',
          class: 'third-project',
          link: 'https://github.com/DamienMgn'
        },
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.projects-container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, rgba(1, 24, 50, 1), rgba(255, 255, 255, 0.1)), url('../assets/tools.jpeg');
  background-size: cover;
  border-radius: 2px;
}

.projects {
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vw;
  margin-top: 15px;
}

.slide {
  height: 60vh;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  opacity: 1;
  color: #011832;
  font-size: 0.9rem;
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: justify;
  border: 3px solid;
  border-radius: 2px;
  background: linear-gradient(-45deg, rgba(1, 24, 50, 1), rgba(255, 255, 255, 0.1));
  color: #FFFFFF
}

.slide-title {
  color: #FFFFFF;
  padding: 5px 5px;
  font-weight: bold;
  margin-bottom: 2rem;
  border-radius: 10px 100px / 120px;
  border: 3px solid;
}

.slide-link {
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  padding: 5px 50px;
  background-color: transparent;
  transition: all 0.4s;
  border-radius: 2px;
  margin-top: 2rem;
}

.slide-link:hover {
  color: #FFFFFF;
  text-decoration: none;
  transform: scale(1.05);
}

.slide-link:active {
  text-decoration: none;
  transform: scale(0.95)
}

.agile__actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.agile__nav-button {
  padding: 5px 25px;
  margin: 15px 15px;
  border-radius: 2px;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  background-color: transparent;
  transition: background-color 0.5s; 
}

.agile__nav-button:hover {
  color: #011832;
  background-color: #FFFFFF;
}

@media (min-width: 540px) {
  .projects-container {
    height: 80vh;
    width: 90%;
  }

  .slide {
    font-size: 1.2rem;
  }

  .slide-title {
    padding: 5px 100px;
  }

}
@media (min-width: 992px) {
  .projects {
    width: 50vw;
  }
  
  .slide {
    height: 50vh;
    width: 50vw;
    font-size: 1.2rem;
  }

  .agile__nav-button {
    position: absolute;
    margin: 0;
  }

  .agile__nav-button--prev {
    top: 50%;
    left: -183px;
  }

  .agile__nav-button--next {
    top: 50%;
    left: calc(100% + 101px);
  }
}
</style>