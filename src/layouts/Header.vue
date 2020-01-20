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
    color: #FFFFFF !important;
}

header a {
    padding: 4px 8px;
    color: #011627 !important;
    font-size: 0.85rem;
}

.dark header a:hover {
    text-decoration: overline #2FCE7F;
}

header a:hover {
    text-decoration: overline #6b48ff;
}

.dark header .navbar {
    background-color: #252c41 !important;
    border-bottom: 1px solid #FFFFFF;
}

header .navbar {
    background-color: #FFFFFF !important;
    border-bottom: 1px solid #252c41;
}

.navbar-nav {
    margin-top: 1rem;
}

header .navbar-brand {
    color: #252c41 !important;
    text-decoration: none !important;
}

.dark header .navbar-brand {
    color: #FFFFFF !important;
    text-decoration: none !important;
}

.dark .is-active {
    text-decoration: overline #2FCE7F;
}

.is-active {
    text-decoration: overline #6b48ff;
}

.navbar-toggler {
    border: 1px solid #252c41 !important;
}

.dark .navbar-toggler {
    border: 1px solid #FFFFFF !important;
}

.menu-item {
    height: 3px;
    width: 30px;
    background-color: #252c41;
    margin-top: 6px;
    margin-bottom: 6px
}

.dark .menu-item {
    background-color: #FFFFFF;
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