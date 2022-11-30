<template>
    <section class="section--truck bg-black-color py-9 relative lg:py-24">
        <div class="container">
            <div class="truck">
                <div class="hidden lg:block absolute top-0 left-0 bottom-0 w-[50%]">
                    <img src="../images/golden-truck.jpg" alt="" class="w-full h-full">
                </div>
                <div class="truck__right lg:max-w-[50%] ml-auto xl:pl-20 lg:pl-16">
                    <div class="truck__content">
                        <TheHeading title="<span class='text-green'>5 jaar garantie </span>op jouw beplakte trailer" class="mb-10 max-w-[70%] md:mb-14 xlg:max-w-[40%] lg:mb-24 xl:mb-28 2xl:max-w-[55] text-white-color lg:max-w-full" />
                        <ul class="truck__list my-9 md:my-16">
                            <li class="list-items">
                                <img class="list-check" src="../images/check-icon.svg" alt="">
                                <p class="list-text">100+ trailers, bakwagens en bussen geplakt</p>
                            </li>
                            <li class="list-items mt-4">
                                <img class="list-check" src="../images/check-icon.svg" alt="">
                                <p class="list-text">20+ jaar ervaring</p>
                            </li>
                        </ul>
                        <p class="truck__text text-left text-white text-xs md:text-xl font-semibold">Is het contrast binnen 5 jaar verminderd, of heeft het plakwerk losgelaten? Dan herstellen wij dit kosteloos.</p>
                        <div class="action-block hidden lg:block text-left lg:mt-20">
                            <a href="javascript:;" class="action-btn">NEEM CONTACT OP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheHeading from "./TheHeading.vue";
export default {
    name: "TheSpecialist",
    components: {
        TheHeading
    },
    
}
</script>
<style>
.list-items{
    @apply flex gap-1 md:gap-3
}
.list-check{
    @apply w-3 w-auto
}
.list-text{
    @apply text-base font-semibold md:text-2xl
}
</style>