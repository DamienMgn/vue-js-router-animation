<template>
    <div class="contact-icon">
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
</template>

<script>

    export default {

        props: ["mode"],

    };
</script>


<style>


</style>