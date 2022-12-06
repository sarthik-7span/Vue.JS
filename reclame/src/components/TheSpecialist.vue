<template>
    <section class="section-specialist bg-black-color py-9 xlg:py-24 ">
        <div class="container">
            <div class="specialist relative">
                <div class="lg:hidden">
                    <TheHeading
                        title="Waarom <span class='text-green'>Reclame Rijden </span> dé specialist in full-color trailer is"
                        class="mb-10 xsm:max-w-[55%] md:mb-14 xlg:max-w-[40%] lg:max-w-[45%] lg:mb-24 xl:mb-28 2xl:max-w-[55] text-white-color xlg:hidden" />
                </div>
                <div class="specialist flex flex-col gap-6 xlg:flex-row">
                    <div class="specialist__card xlg:w-[33.33%] shrink" v-for="block in specialist" :key="block.id">
                        <img :src="getImgUrl(block.src)" alt="" class="w-full">
                        <h6 class="text-green text-left font-semibold text-base mt-6 mb-3 md:text-2xl">{{ block.title }}
                        </h6>
                        <p class="specialist-text md:text-xl">
                            {{ block.text1 }}
                        </p>
                        <p class="specialist-text mt-7 md:text-xl">
                            {{ block.text2 }}
                        </p>
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
    data: () => ({
        specialist: [
            {
                id: "1",
                src: "metting.jpg",
                title: "Een uniek ontwerp dat zorgt voor meer naamsbekendheid",
                text1: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer naamsbekendheid en zorgen we dat de trailer past bij de huisstijl.",
                text2: "Heb je zelf al een ontwerp? Dan plakken we jouw trailer met het ontwerp dat je zelf aanlevert."
            },
            {
                id: "2",
                src: "red-truck.jpg",
                title: "5 jaar garantie op het plakwerk",
                text1: "We leveren kwaliteit en daar moet je zeker van zijn. Daarom geven we 5 jaar garantie op de kleur en lijm van jouw plakwerk. De kleuren blijven mooi en alles blijft goed zitten.",
                text2: "Vaak gaat een geplakte trailer zelfs 8 à 9 jaar mee, afhankelijk van de weersomstandigheden en het gebruik."
            },
            {
                id: "3",
                src: "google-map.jpg",
                title: "50+ 5-sterren reviews op Google",
                text1: "Onze klanten zijn tevreden met ons werk en dat laten ze ons graag weten. Op Google hebben we hierdoor al meer dan 50 5-sterren reviews verzameld.",
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
<style>
.specialist-text {
    @apply text-xs text-white text-left
}

.specialist::before {
    border: 30px solid;
    border-color: white transparent transparent transparent;

    @apply content-[''] absolute top-[-13%] left-0 hidden xlg:block
}
</style>