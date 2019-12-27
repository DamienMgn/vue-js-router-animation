<template>
  <ul class="menu">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/projects">Projects</router-link></li>
    <li><router-link to="/skills">Compétences</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
  </ul>
</template>

<script>

    export default {
        name: 'header'
    }

</script>

<style>
.menu {
    position: absolute;
    z-index: 14;
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0
}

.menu li {
    margin: 0 10px 0 10px
}

.menu li a {
    color: #000;
}

</style>