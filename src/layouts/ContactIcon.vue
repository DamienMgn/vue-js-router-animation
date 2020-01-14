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

.contact-icon {
    width: 100%;
    height: 35px;
}

.contact-icon-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-icon-link-container a {
    margin: -10px 40px 0 40px;
}

.vertical-line {
    width: 1px;
    height: 24px;
    margin-top: -10px
}

.dark .vertical-line {
    background: #FFFFFF;
}

.light .vertical-line {
    background: #011832;
}

</style>