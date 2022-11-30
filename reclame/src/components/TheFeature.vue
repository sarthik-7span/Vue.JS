<template>
    <section class="section--feature py-9 relative xl:pt-20 xl:pb-12">
        <div class="container">
            <div class="feature">
                <TheHeading title="Laat jouw trailer plakken door <span class='text-green'>Reclame Rijden</span>" class="mb-10 xxsm:max-w-[75%] md:mb-14 xlg:max-w-[40%] lg:max-w-[45%] lg:mb-24 xl:mb-28 2xl:max-w-[55%]" />
                <div class="feature__row flex flex-wrap gap-4 justify-between xsm:gap-11 lg:gap-5">
                    <div v-for="block in features" :key="block.id" class="bg-gray-color px-7 py-6 max-w-[47%] shrink xsm:py-11 w-full lg:max-w-[23%] 2xl:px-9 xl:py-24 ">
                        <img :src="getImgUrl(block.src)" class="max-w-[70%] mx-auto mb-5 h-14 xsm:h-20"/>
                        <h3 class="text-xs font-semibold xsm:text-lg">{{ block.text }}</h3>
                    </div>
                </div>
                <div class="action-block mt-9 lg:text-left xlg:my-16 xl:my-20">
                    <a href="javascript:;" class="action-btn">NEEM CONTACT OP</a>
                </div>
                <div class="section-specialist hidden xlg:block">
                    <TheHeading
                        title="Waarom <span class='text-green'>Reclame Rijden </span> dé specialist in full-color trailer reclame is" class="xlg:max-w-[70%] 2xl:max-w-[80%]"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import TheHeading from "./TheHeading.vue";
export default {
    name: "TheFeature",
    components: {
        TheHeading
    },
    data: () => ({
        features: [
            {
                id: "1",
                src: "desktop.png",
                text: "Uniek en opvallend ontwerp op maat",
            },
            {
                id: "2",
                src: "printer.png",
                text: "Folie in eigen beheer geprint met de nieuwste apparatuur",
            },
            {
                id: "3",
                src: "cutter.png",
                text: "Montage door ons team van specialisten",
            },
            {
                id: "4",
                src: "verify.png",
                text: "5 jaar garantie op kleur en lijm",
            }
        ],
    }),
    methods: {
        getImgUrl: function (path) {
            return require('@/images/' + path);
        }
    }
}
</script>
<style>
.feature__row::before{
    content: "";
    position: absolute;
    border: 1px solid #CDCDCB;

    @apply left-0 right-0 top-[17%] w-[90%] mx-auto xsm:w-[95%] xsm:top-[15%] lg:top-[20%] 2xl:max-w-[74%] xl:top-[25%] 3xl:max-w-[56%]
}
</style>