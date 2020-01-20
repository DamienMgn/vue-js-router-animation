<template>
    <footer>
        <div class="footer-link-container">
            <p>maquignondm@gmail.com</p>
            <span class="horizontal-line"></span>
            <p>Développé avec VueJs</p>
            <span class="horizontal-line"></span>
            <p>Photos - <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></p>
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
    top: calc(100% - 45px);
    width: 100%;
    height: 15px;
}

.footer-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
}

.footer-link-container p{
   margin: -10px 10px 0 10px;
}

.dark .footer-link-container p {
    color: #F1F1F1
}

.dark .footer-link-container a {
    color: #2FCE7F
}

.light .footer-link-container a {
    color: #6b48ff
}

.horizontal-line {
    width: 7px;
    height: 1px;
    margin-top: -10px;
    background-color: #F1F1F1
}

.light .horizontal-line {
    background-color: #011832
}

@media (min-width: 595px) {
    footer {
        position: absolute;
        top: calc(100% - 15px);
        width: 100%;
        height: 15px;
    }

    .footer-link-container p{
        margin: -10px 20px 0 20px;
    }
}

</style>