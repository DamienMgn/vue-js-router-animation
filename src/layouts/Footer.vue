<template>
    <footer>
        <div class="footer-link-container">
            <a href="#"><img :src="require('../assets/github_' + mode + '.svg')"></a>
            <span class="vertical-line"></span>
            <a href="#"><img :src="require('../assets/codepen_' + mode + '.svg')"></a>
            <span class="vertical-line"></span>
            <a href="#"><img :src="require('../assets/linkedin_' + mode + '.svg')"></a>
            <span class="vertical-line"></span>
            <a href="#"><img :src="require('../assets/envelope_' + mode + '.svg')"></a>
        </div>
    </footer>
</template>

<script>

    export default {

        props: ["mode"],

    };
</script>


<style>

footer {
    width: 100%;
    height: 35px;
    z-index: 1;
}

.footer-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-link-container a {
    margin: -10px 40px 0 40px;
}

.light .footer-link-container a {
    color: #282c37;
}

.dark .footer-link-container a {
    color: #d9e1e8;
}

.vertical-line {
    width: 1px;
    height: 24px;
    background-color: #2b90d9;
    margin-top: -10px
}

</style>