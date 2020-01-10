<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="info" v-bind:class="mode">
            <b-navbar-brand href="#">DM</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse">
                <div class="menu-item"></div>
                <div class="menu-item"></div>
                <div class="menu-item"></div>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

            <b-navbar-nav>
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/about">About</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/projects">Projects</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/contact">Contact</router-link></b-nav-item>
                <Toggle :mode="mode" @toggle="$emit('toggle')"/>
            </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import Toggle from "./Toggle";

    export default {

    components: { Toggle },

    props: ["mode"],

    data () {
        return {
            visible: true
        }
    }

    };
</script>

<style>

header {
    position: absolute;
    width: 100%;
    z-index: 14;
    padding: 10px;
    top: 0px;
}

header .dark a {
    color: #FFFFFF !important;
}

header a {
    padding: 4px 8px 4px 8px;
    font-weight: bold;
}

header a:hover {
    text-decoration: none;
}

header .light a {
    color: #282c37 !important;
}

header .dark {
    background-color: #282c37 !important;
    border-bottom: 1px solid #d9e1e8;
}

header .light {
    background-color: #FFFFFF !important;
    border-bottom: 1px solid #282c37;
}

.navbar-brand {
    border: 2px solid #2b90d9;
    border-radius: 50%;
}

.is-active {
    outline: 2px solid #2b90d9 !important;
}

.navbar-toggler {
    border: 1px solid #FFFFFF !important;
}

.menu-item {
    height: 3px;
    width: 30px;
    background-color: #2b90d9;
    margin-top: 6px;
    margin-bottom: 6px
}

</style>