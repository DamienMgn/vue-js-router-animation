<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="info" >
            <router-link class="navbar-brand" to="/">DM</router-link>

            <b-navbar-toggle target="nav-collapse">
                <div class="menu-item"></div>
                <div class="menu-item"></div>
                <div class="menu-item"></div>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav>
                <b-nav-item href="#"><router-link to="/about">A PROPOS</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/projects">PROJETS</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/contact">CONTACT</router-link></b-nav-item>
                <Toggle v-if="window.width < 992" :mode="mode" @toggle="$emit('toggle')"/>
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
}

.dark header a {
    color: #FFFFFF !important;
}

header a {
    padding: 4px 8px;
    font-weight: bold;
}

.dark header a:hover {
    text-decoration: overline #FFFFFF;
}

.light header a:hover {
    text-decoration: overline #011832;
}

.light header a {
    color: #011627 !important;
}

.dark header .navbar {
    background-color: transparent !important;
    border-bottom: 1px solid #FFFFFF;
}

.light header .navbar {
    background-color: transparent !important;
    border-bottom: 1px solid #011832;
}

.light header .navbar-brand {
    color: #011832 !important;
    text-decoration: none !important;
}

.dark header .navbar-brand {
    color: #FFFFFF !important;
    text-decoration: none !important;
}

.dark .is-active {
    text-decoration: overline #FFFFFF;
}

.light .is-active {
    text-decoration: overline #011832;
}

.navbar-toggler {
    border: 1px solid #FFFFFF !important;
}

.menu-item {
    height: 3px;
    width: 30px;
    background-color: #6b48ff;
    margin-top: 6px;
    margin-bottom: 6px
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
        justify-content: center;
    }

    header a {
        padding: 4px 16px;
        margin: 0 16px;
    }

    .dark header .navbar {
    background-color: transparent !important;
    }

    .light header .navbar {
    background-color: transparent !important;
    }
}

</style>