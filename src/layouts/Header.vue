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
                <b-nav-item href="#" v-if="$route.path != '/'"><router-link to="/">HOME</router-link></b-nav-item>
                <b-nav-item href="#" v-if="$route.path != '/'"><router-link to="/about">A PROPOS</router-link></b-nav-item>
                <b-nav-item href="#" v-if="$route.path != '/'"><router-link to="/projects">REALISATIONS</router-link></b-nav-item>
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
    color: #F1F1F1 !important;
}

header a {
    padding: 4px 8px;
    font-weight: bold;
    color: #011627 !important;
}

.dark header a:hover {
    text-decoration: overline #F1F1F1;
}

.light header a:hover {
    text-decoration: overline #011832;
}

.dark header .navbar {
    background-color: transparent !important;
    border-bottom: 1px solid #F1F1F1;
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
    color: #F1F1F1 !important;
    text-decoration: none !important;
}

.dark .is-active {
    text-decoration: overline #F1F1F1;
}

.light .is-active {
    text-decoration: overline #011832;
}

.navbar-toggler {
    border: 1px solid #011832 !important;
}

.dark .navbar-toggler {
    border: 1px solid #F1F1F1 !important;
}

.menu-item {
    height: 3px;
    width: 30px;
    background-color: #011832;
    margin-top: 6px;
    margin-bottom: 6px
}

.dark .menu-item {
    background-color: #F1F1F1;
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