<template>
  <div class="page contact">
      <div class="contact-container">
        <h3>Damien Maquignon</h3>
        <p>14000, Caen France</p>
        <ContactIcon :mode="mode" />
      </div>
  </div>
</template>

<script>
import ContactIcon from '../layouts/ContactIcon.vue';

export default {
    components: {
      ContactIcon,
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

.contact-container a {
  color: #6C49B8
}

.contact-container a:hover {
  color: #6C49B8
}

</style>
