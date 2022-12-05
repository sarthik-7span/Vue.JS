<template>
    <footer class="section-footer bg-black-color pt-9 pb-1 lg:py-16 2xl:py-24">
        <div class="container">
            <div class="footer" >
                <div class="footer__row flex flex-col lg:flex-row justify-between lg:gap-[190px] xl:gap-[300px]">
                    <div class="footer__logo order-1">
                        <a href="javascript:;" class="max-w-[60%] block mr-auto lg:max-w-full lg:mb-16">
                            <img class="footer-logo" src="../assets/images/reclame-logo-white.png" alt="">
                        </a>
                        <div class="footer-social hidden lg:flex gap-4">
                            <a href="javascript:;" class="social-link"><img src="../assets/images/facebook-icon.svg" alt=""></a>
                            <a href="javascript:;" class="social-link"> <img src="../assets/images/instagram-icon.svg" alt=""></a>
                            <a href="javascript:;" class="social-link"><img src="../assets/images/linkdin-icon.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="footer__detail max-w-[80%] mr-auto order-3 mb-12 lg:max-w-full lg:order-2 lg:mb-0">
                        <h3 class="footer-title text-green font-bold text-left text-base lg:mb-11">Reclame Rijden</h3>
                        <ul class="footer-nav">
                            <li class="footer-nav__info text-base text-white text-left"><address>Industrieweg 13A4881 EW Zundert, Nederland (NL)</address></li>
                            <li class="footer-nav__info text-base text-white text-left"><a href="tel:+31 (0)76 599 17 09" class="block"> +31 (0)76 599 17 09</a><a href="mailto:info@reclamerijden.nu">info@reclamerijden.nu</a></li>
                            <li class="footer-nav__info text-base text-white text-left"><a href="javascript:;">KvK nummer: 75181681 BTW nummer: NL86 0173 240 B01</a></li>
                        </ul>
                    </div>
                    <div class="footer__over order-2 my-11 lg:order-3 lg:my-0">
                        <ul class="footer-nav">
                            <li >
                                <a href="javascript:;" v-for="loop in footer" :key="loop.id" class="footer-nav__link text-lg text-white block text-left whitespace-nowrap">{{loop.link}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-social flex gap-4 order-4 lg:hidden">
                        <a href="javascript:;" class="social-link"><img src="../assets/images/facebook-icon.svg" alt=""></a>
                        <a href="javascript:;" class="social-link"> <img src="../assets/images/instagram-icon.svg" alt=""></a>
                        <a href="javascript:;" class="social-link"><img src="../assets/images/linkdin-icon.svg" alt=""></a>
                    </div>
                </div>
                <div class="footer__copright flex flex-col-reverse mt-[120px] lg:flex-row justify-between items-start">
                    <p class="copright-text text-left text-xs font-light mt-12 xl:text-2xl text-[#666666] lg:mt-0 lg:text-lg">&#169; 2021 - 2022 Reclame Rijden</p>
                    <div class="copright-onze flex flex-wrap gap-x-7 gap-y-4 lg:gap-x-8 xl:gap-x-16 ">
                        <h5 class="text-base font-bold text-white text-left w-[100%] lg:w-auto">ONZE MERKEN:</h5>
                        <a href="javascript:;" class="max-w-[25%]" v-for="loop in footer" :key="loop.id">
                            <img class="social-icon" :src="getImgUrl(loop.logo)" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "TheFooter",
    data: () => ({
        footer: [
            {
                id: "1",
                logo: "reclame-logo-white.png",
                link: "OVER ONS",
            },
            {
                id: "2",
                logo: "fevo-logo.png",
                link: "PRIVACY STATEMENT",
                },
            {
                id: "3",
                logo: "proton-logo.png",
                link: "TERMS OF SERVICE",
            }
        ],
    }),
    methods: {
        getImgUrl: function (path) {
            return require('../assets/images/' + path);
        }
    }
}
</script>
<style scoped>
.footer-nav__info + .footer-nav__info{
    @apply mt-5
}
.footer-nav__link + .footer-nav__link{
    @apply mt-3
}
</style>