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
    top: calc(100% - 105px);
    width: 100%;
    height: 15px;
}

.footer-link-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    line-height: 3rem;
}

.footer-link-container p{
   margin: -10px 10px 0 10px;
   font-weight: 200;
}

.dark .footer-link-container p {
    color: #ABB2B9
}

.dark .footer-link-container a {
    color: #1ABC9C
}

.light .footer-link-container a {
    color: #0035C7
}

.horizontal-line {
    width: 7px;
    height: 1px;
    margin-top: -10px;
    background-color: #ABB2B9
}

.light .horizontal-line {
    background-color: #17202A
}

@media (min-width: 595px) {
    footer {
        position: absolute;
        top: calc(100% - 15px);
        width: 100%;
        height: 15px;
    }

    .footer-link-container {
        flex-direction: row;
        line-height: 1rem;
    }

    .footer-link-container p{
        margin: -10px 20px 0 20px;
    }
}

</style>