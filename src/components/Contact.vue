<template>
  <div class="page contact">
      <div class="contact-container">
        <h3>Damien Maquignon</h3>
        <p>14000, Caen France</p>
        <p>maquignondm@gmail.com</p>
        <div class="contact-icon-link-container">
          <a href="#"><img :src="require('../assets/github_' + mode + '.svg')" alt="github"></a>
          <span class="vertical-line"></span>
          <a href="#"><img :src="require('../assets/codepen_' + mode + '.svg')" alt="codepen"></a>
          <span class="vertical-line"></span>
          <a href="#"><img :src="require('../assets/linkedin_' + mode + '.svg')" alt="linkedin"></a>
          <span class="vertical-line"></span>
          <a href="#"><img :src="require('../assets/envelope_' + mode + '.svg')" alt="mail"></a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    components: {
    },
    props: ["mode"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 4rem;
  font-size: 1.3rem;
}

.contact-container p {
  margin: 0px;
}

.contact-container a {
  color: #6C49B8
}

.contact-container a:hover {
  color: #6C49B8
}

.contact-icon-link-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.contact-icon-link-container a {
    margin: -10px 40px 0 40px;
}

.vertical-line {
    width: 1px;
    height: 24px;
    margin-top: -10px;
    display: none;
    background: #011832;
}

.dark .vertical-line {
    background: #FFFFFF;
}

@media (min-width: 540px) {
  .vertical-line {
      display: initial;
  }

  .contact-icon-link-container {
    flex-direction: row;
  }
}

@media (min-width: 840px) {


}

</style>
