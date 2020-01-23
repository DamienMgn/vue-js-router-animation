<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="info" >

            <b-navbar-toggle target="nav-collapse">
                <div class="menu-item"></div>
                <div class="menu-item"></div>
                <div class="menu-item"></div>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav>
                <router-link to="/">HOME</router-link>
                <router-link to="/about">A PROPOS</router-link>
                <router-link to="/projects">REALISATIONS</router-link>
                <Toggle v-if="window.width < 992" :mode="mode" @toggle="$emit('toggle')"/>
            </b-navbar-nav>
            <b-navbar-nav class="header-icons-container">
                <b-nav-item href="https://codepen.io/damienmgn/pens/public" target="_blank" rel="noopener noreferrer" ><img :src="require('../assets/images/codepen_' + mode + '.svg')" alt="codepen"></b-nav-item>
                <b-nav-item href="https://github.com/DamienMgn" target="_blank" rel="noopener noreferrer" ><img :src="require('../assets/images/github_' + mode + '.svg')" alt="github"></b-nav-item>
                <b-nav-item href="https://fr.linkedin.com/in/damien-maquignon" target="_blank" rel="noopener noreferrer" ><img :src="require('../assets/images/linkedin_' + mode + '.svg')" alt="linkedin"></b-nav-item>
                <b-nav-item href="mailto:maquignondm@gmail.com" target="_blank" rel="noopener noreferrer" ><img :src="require('../assets/images/envelope_' + mode + '.svg')" alt="mail"></b-nav-item>
            </b-navbar-nav>
            </b-collapse>
            <Toggle v-if="window.width >= 992" :mode="mode" @toggle="$emit('toggle')"/>
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
                visible: true,
                window: {
                    width: 0,
                    height: 0
                }
            }
        },
        created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
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
    margin-top: 1rem;
}

.dark header a {
    color: #EFEFF5 !important;
}

header a {
    padding: 4px 8px;
    color: #011627 !important;
    font-size: 0.85rem;
}

.dark header a:hover {
    color: #1ABC9C !important;
}

header a:hover {
    text-decoration: none;
    color: #0035C7 !important;
}

.dark header .navbar {
    background-color: #17202A !important;
    border-bottom: 1px solid #EFEFF5;
}

header .navbar {
    background-color: #F5F5F5 !important;
    border-bottom: 1px solid #17202A;
}

.header-icons-container {
    margin-right: 3rem;
}

.navbar-nav {
    margin-top: 1rem;
}

header .navbar-brand {
    color: #17202A !important;
    text-decoration: none !important;
}

.dark header .navbar-brand {
    color: #EFEFF5 !important;
    text-decoration: none !important;
}

.is-active {
    text-decoration: none;
    color: #0035C7 !important;
}

.dark .is-active {
    text-decoration: none;
    color: #1ABC9C !important;
}

.navbar-toggler {
    border: 1px solid #17202A !important;
}

.dark .navbar-toggler {
    border: 1px solid #EFEFF5 !important;
}

.menu-item {
    height: 3px;
    width: 30px;
    background-color: #17202A;
    margin-top: 6px;
    margin-bottom: 6px
}

.dark .menu-item {
    background-color: #EFEFF5;
}

@media (min-width: 992px) {
    .dark header .navbar {
        border-bottom: none;
    }

    .light header .navbar {
        border-bottom: none;
    }
    
    .navbar-collapse {
        display: flex;
        justify-content: flex-end;
    }

    .navbar-nav {
        margin-top: 0rem;
    }

    header a {
        padding: 4px 16px;
        margin: 0 16px;
        font-size: 0.95rem;
    }

    .dark header .navbar {
    background-color: transparent !important;
    }

    .light header .navbar {
    background-color: transparent !important;
    }
}

</style>