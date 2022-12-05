<template>
    <section class="section section--contact pb-6 pt-10 md:py-14 lg:pt-20 lg:pb-12 2xl:pt-24">
        <div class="container">
            <TheHeading title="Jouw trailer laten plakken door <span class='text-green'> Reclame
            Rijden</span>?" class="xsm:max-w-[55%] xlg:max-w-[40%] lg:max-w-[45%] 2xl:max-w-[55%]" />
            <p class="font-semibold text-xs text-left xsm:text-xl lg:text-xl 1.5xl:lg:text-3xl mt-4 mb-6 lg:my-10 2xl:my-16">Laat je gegevens achter en ontvang binnen één werkdag een vrijblijvende
                prijsopgave. Of neem direct contact op via <a href="javascript:;" class="contact-number"><span class="text-green whitespace-nowrap">+31 (0)76 599 17 09</span></a></p>
            <div class="contact text-left">
                <div class="contact__row lg:flex gap-4">
                    <input type="text" class="mb-4" name="name" placeholder="Naam">
                    <input type="text" class="mb-4" placeholder="Bedrijfsnaam (optioneel)">
                </div>
                <div class="contact__row lg:flex gap-4">
                    <input type="email" class="mb-4" name="email" placeholder="E-mailadres">
                    <input type="tel" class="mb-4" placeholder="Telefoonnummer">
                </div>
                <textarea name="textarea" id="textarea" class="resize-none" cols="30" rows="10" placeholder="Toelichting"></textarea>
                <button class="action-btn mt-6 lg:mt-14 2xl:mt-16">VERZDEN</button>
            </div>
        </div>
    </section>
</template>
<script>
import TheHeading from "./TheHeading.vue";
export default {
    name: "TheFaq",
    components: {
        TheHeading
    },
}
</script>
<style scoped>
input, textarea{
    @apply w-full p-4 bg-gray-color text-xs text-black placeholder:text-black lg:text-base 2xl:text-xl
}
</style>