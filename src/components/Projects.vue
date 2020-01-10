<template>
  <div class="page projects">
    <div class="projects-container">
      <div class="project-card">
        <img class="project-img" :src="require('../assets/wiwatt.png')" alt="">
        <p>Projet de fin de formation réalisé en équipe de 4. Ce projet à entièrement était réalisé avec le framework Symfony 4.</p>
        <a href=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.projects-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.project-card {
  margin: 10px;
  padding: 10px;
  border-radius: 2px;
  width: 330px;
}

.project-img {
  width: 100%;
  height: 230px;
  border: 1px solid black
}
</style>
