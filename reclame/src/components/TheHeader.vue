<template>
    <header class="bg-black-color py-4 relative lg:py-6 xl:py-8">
        <div class="container-fluid">
            <div class="header flex justify-between items-center">
                <div class="z-[2] w-[120px] xsm:w-[150px] sm:w-[200px] xl:w-[200px] 2xl:w-[234px] xl:ml-9">
                    <img src="../assets/images/Reclame-Logo.png" alt="">
                </div>
                <div class="lg:hidden">
                    <img src="../assets/images/Burger.png" alt="" @click="open = !open">
                </div>
                <div v-if="open" class="nav-mob fixed inset-0 p-4 pb-9 z-50 flex flex-col h-[100vh] justify-between xl:static xl:bg-none">
                    <div>
                        <div class="">
                            <img class="ml-auto" src="../assets/images/Close.png" alt="" @click="open = !open">
                        </div>
                        <ul
                            class="justify-center align-middle text-white-color text-lg pt-16 w-[80%] md:w-[60%] ml-auto text-left">

                            <li class="nav-link"><a href="javascript:;" class="text-black">PORTFOLIO</a></li>
                            <li class="nav-link"><a href="javascript:;" class="text-black pt-1">ONZE KLANTEN</a></li>
                            <li class="nav-link"><a href="javascript:;" class="text-black pt-1">OVER ONS</a></li>
                            <li class="nav-link"><a href="javascript:;" class="text-green-color pt-2">+ 31(0)76 599 17 09</a>
                            </li>
                            <div class="action-btn xl:hidden mt-12 ">
                                <a href="javascript:;">NEEM CONTACT OP</a>
                            </div>
                        </ul>
                    </div>
                    <div class="flex justify-between items-center pt-4 border-t-2 border-black-color xl:hidden">
                        <div class="w-[120px]">
                            <a href="javascript:;" class="logo-link"><img src="../assets/images/Reclame-Logo.png" alt=""></a>
                        </div>
                        <div class="flex justify-center gap-4 items-center">
                            <a href="javascript:;" class=""><img src="../assets/images/facebook-icon.svg" alt=""></a>
                            <a href="javascript:;" class=""> <img src="../assets/images/instagram-icon.svg" alt=""></a>
                            <a href="javascript:;" class=""><img src="../assets/images/linkdin-icon.svg" alt=""></a>
                        </div>
                    </div>
                </div>
                <ul class="hidden lg:flex justify-center align-middle text-white-color text-lg">
                
                    <li class="nav-link"><a href="javascript:;" class="text-white">PORTFOLIO</a></li>
                    <li class="nav-link"><a href="javascript:;" class="text-white">ONZE KLANTEN</a></li>
                    <li class="nav-link"><a href="javascript:;" class="text-white">OVER ONS</a></li>
                    <li class="nav-link"><a href="javascript:;" class="text-green-color">+ 31(0)76 599 17 09</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "TheHeader",
    data() {
        return {
            open: false
        }
    }
}
</script>
<style lang="scss">
.header::before {
    background-image: url("../assets/images/Tringle-x.png");

    @apply content-[''] absolute top-0 bottom-0 bg-no-repeat bg-center bg-contain w-[150px] z-[1] left-[28%] xsm:left-[34%] sm:left-[27%] xlg:left-[25%] xl:w-[180px] 3xl:left-[26%]
}

.header::after {
    content: '';

    @apply bg-white w-[49%] xxsm:w-[46%] sm:w-[37%] xlg:w-[32%] 1.5xl:w-[31%] absolute top-0 bottom-0 left-0 2xl:w-[29%]
}

.nav-mob {
    background: linear-gradient(335.71deg, #FFFFFF 83.83%, rgba(255, 255, 255, 0) 129.76%);
}

.nav-link a{
    @apply  text-lg font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl
}
.nav-link + .nav-link{
    @apply lg:ml-5 xl:ml-7 2xl:ml-14
}
</style>