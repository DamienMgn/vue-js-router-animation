<template>
    <footer>
        <div class="footer-link-container">
            <p>Damien Maquignon - 2020</p>
            <span class="horizontal-line"></span>
            <p>Développé avec VueJs</p>
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
    position: absolute;
    top: calc(100% - 15px);
    width: 100%;
    height: 15px;
}

.footer-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem
}

.footer-link-container p{
   margin: -10px 20px 0 20px;
}

.footer-link-container a {
    margin: -10px 40px 0 40px;
    font-size: 0.8rem
}

.dark .footer-link-container a {
    color: #FFFFFF;
}

.light .footer-link-container a {
    color: #011832;
}

.horizontal-line {
    width: 7px;
    height: 1px;
    margin-top: -10px;
    background-color: #FFFFFF
}

.light .horizontal-line {
    background-color: #011832
}

.dark .vertical-line {
    background: #FFFFFF;
}

.light .vertical-line {
    background: #011832;
}

</style>