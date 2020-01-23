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
                <b-nav-item href="#" ><router-link to="/">HOME</router-link></b-nav-item>
                <b-nav-item href="#" ><router-link to="/about">A PROPOS</router-link></b-nav-item>
                <b-nav-item href="#" ><router-link to="/projects">REALISATIONS</router-link></b-nav-item>
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
    color: #EFEFF5 !important;
}

header a {
    padding: 4px 8px;
    color: #011627 !important;
    font-size: 0.85rem;
}

.dark header a a:hover {
    text-shadow: 1px 0 0 #1ABC9C, -1px 0 0 #1ABC9C, 0 1px 0 #1ABC9C, 0 -1px 0 #1ABC9C, 1px 1px #1ABC9C, -1px -1px 0 #1ABC9C, 1px -1px 0 #1ABC9C, -1px 1px 0 #1ABC9C;
    color: #17202A !important;
}

header a a:hover {
    text-shadow: 1px 0 0 #6b48ff, -1px 0 0 #6b48ff, 0 1px 0 #6b48ff, 0 -1px 0 #6b48ff, 1px 1px #6b48ff, -1px -1px 0 #6b48ff, 1px -1px 0 #6b48ff, -1px 1px 0 #6b48ff;
    text-decoration: none;
    color: #EFEFF5 !important;
}

.dark header .navbar {
    background-color: #17202A !important;
    border-bottom: 1px solid #EFEFF5;
}

header .navbar {
    background-color: #F5F5F5 !important;
    border-bottom: 1px solid #17202A;
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
    text-shadow: 1px 0 0 #6b48ff, -1px 0 0 #6b48ff, 0 1px 0 #6b48ff, 0 -1px 0 #6b48ff, 1px 1px #6b48ff, -1px -1px 0 #6b48ff, 1px -1px 0 #6b48ff, -1px 1px 0 #6b48ff;
    text-decoration: none;
    color: #EFEFF5 !important;
}

.dark .is-active {
    text-shadow: 1px 0 0 #1ABC9C, -1px 0 0 #1ABC9C, 0 1px 0 #1ABC9C, 0 -1px 0 #1ABC9C, 1px 1px #1ABC9C, -1px -1px 0 #1ABC9C, 1px -1px 0 #1ABC9C, -1px 1px 0 #1ABC9C;
    text-decoration: none;
    color: #17202A !important;
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