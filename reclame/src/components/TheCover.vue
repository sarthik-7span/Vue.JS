<template>
    <section class="section-cover py-10 bg-no-repeat bg-left overflow-hidden bg-cover relative xsm:py-16 lg:py-20 2xl:py-32 2xl:bg-[length:100%_100%]">
        <div class="container z-20">
            <div class="relative z-20 xsm:text-left">
                <h1 class="font-semibold mb-64 text-left xsm:text-white xsm:text-2xl xsm:mb-20 xsm:max-w-[70%] lg:text-4xl xl:text-5xl 2xl:text-6xl 1.5xl:mb-28">MEER KLANTEN AANTREKKEN MET FULL-COLOR<span
                        class="text-green"> TRAILER
                        RECLAME!</span></h1>
                <p class="cover-text mb-4 xsm:mb-6 xsm:max-w-[70%] lg:mb-9">Laat jouw trailer beplakken door <span class="text-green"> Reclame
                        Rijden</span>; dé specialist in trailer
                    reclame.</p>
                <ul class="">
                    <li class="list-items">
                        <div class="w-[12px] xsm:w-auto">
                            <img class="list-check" src="../images/check-icon.svg" alt="">
                        </div>
                        <p class="list-text">100+ trailers, bakwagens en bussen</p>
                    </li>
                    <li class="list-items">
                        <div class="w-[12px] xsm:w-auto">
                            <img class="list-check" src="../images/check-icon.svg" alt="">
                        </div>
                        <p class="list-text">20+ jaar ervaring</p>
                    </li>
                    <li class="list-items">
                        <div class="w-[12px] xsm:w-auto">
                            <img class="list-check" src="../images/check-icon.svg" alt="">
                        </div>
                        <p class="list-text">50+ 5-sterren reviews op Google</p>
                    </li>
                </ul>
                <a href="javascript:;" class="action-btn mt-8 lg:mt-20 2xl:mt-36">NEEM CONTACT OP</a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "TheCover"
}
</script>
<style>
.list-text,
.cover-text {
    @apply font-semibold text-xs xxsm:text-base text-left text-white xsm:text-xl lg:text-xl 1.5xl:lg:text-3xl
}

.section-cover {
    background-image: url(../images/cover-background-2.jpg);
}

.section-cover::before {
    content: '';
    background: linear-gradient(90deg, #303031 34.05%, rgba(48, 48, 49, 0.6) 59.73%, rgba(48, 48, 49, 0) 78.27%);

    @apply absolute bottom-[-152px] left-0 right-0 h-full w-full -rotate-90 xsm:rotate-0 xsm:bottom-0
}

.list-items {
    @apply flex gap-[8px] items-center
}
@media only screen and (min-width: 570px) {
    .section-cover {
            background-image: url(../images/cover-background.jpg);
        }
}
</style>