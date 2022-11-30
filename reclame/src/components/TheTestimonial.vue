<template>
    <section class="section--testimonial pt-10 md:pt-14 lg:pt-24 pb-20 md:pb-24 overflow-hidden relative">
        <div class="container">
            <div class="testimonial lg:flex gap-8">
                <div class="testimonial__left 2xl:w-[48%] 2xl:mr-auto">
                    <div class="text-left">
                        <TheHeading
                            title="Over <span class='text-green'>Reclame Rijden</span>"
                            class="mb-4 xsm:max-w-[55%] xlg:max-w-[40%] lg:max-w-full lg:mb-6"/>
                        <p class="text-base font-semibold xl:text-2xl 2xl:text-3xl">Reclame Rijden is onderdeel van FAVO Reclame, een full-service
                            reclamebureau uit Zundert, Noord-Brabant. Wij zijn al meer dan 20 jaar plakperfectionisten
                            met ieder onze eigen specialisatie. Met een team van 8 kunnen we zo iedere reclame klus aan.
                        </p>
                        <h6 class="text-base xl:text-xl font-semibold mt-4 mb-6">In 5 stappen voeren we ieder project succesvol uit:</h6>
                        <ul class="testimonial-list mb-9 lg:mb-0">
                            <li class="testimonial-list__text">
                                <span class="text-green">1.</span> Na het eerste contact brengen we jouw aanvraag in
                                kaart.
                            </li>
                            <li class="testimonial-list__text">
                                <span class="text-green">2.</span>We maken een passende offerte binnen jouw budget.
                            </li>
                            <li class="testimonial-list__text">
                                <span class="text-green">3.</span>Samen plannen we voor het plakken van jouw trailer(s).
                            </li>
                            <li class="testimonial-list__text">
                                <span class="text-green">4.</span>Al het plakwerk wordt in gereedheid gebracht en we
                                leveren volgens afspraak, op locatie of bij in onze eigen
                                werkplaats.
                            </li>
                            <li class="testimonial-list__text">
                                <span class="text-green">5.</span>Tevreden? Dan zijn wijdat ook.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="testimonial__right lg:max-w-[50%] 2xl:absolute 2xl:right-0 2xl:top-[7%]">
                    <div class="testimonal-slider">
                        <div class="relative testimonal-slider__block">
                            <img src="../images/men1.jpg" alt="" class="w-full">
                            <div class="bg-green-color p-4 xl:p-6 2xl:p-8 absolute bottom-0 left-0 right-0">
                                <h5 class="text-base font-semibold mb-2 2xl:text-2xl">Falco van Opstal</h5>
                                <p class="text-base leading-3 2xl:text-2xl">Eigenaar</p>
                            </div>
                        </div>
                        <div class="relative testimonal-slider__block" >
                            <img src="../images/men2.jpg" alt="" class="w-full">
                            <div class="bg-green-color p-4 xl:p-6 2xl:p-8 absolute bottom-0 left-0 right-0">
                                <h5 class="text-base font-semibold mb-2 2xl:text-2xl">Wesley van Genk</h5>
                                <p class="text-base leading-3 2xl:text-2xl">Bedrijfsleider</p>
                            </div>
                        </div>
                        <div class="relative testimonal-slider__block">
                            <img src="../images/men1.jpg" alt="" class="w-full">
                            <div class="bg-green-color p-4 xl:p-6 2xl:p-8 absolute bottom-0 left-0 right-0">
                                <h5 class="text-base font-semibold mb-2 2xl:text-2xl">Falco van Opstal</h5>
                                <p class="text-base leading-3 2xl:text-2xl">Eigenaar</p>
                            </div>
                        </div>
                        <div class="relative testimonal-slider__block">
                            <img src="../images/men2.jpg" alt="" class="w-full">
                            <div class="bg-green-color p-4 xl:p-6 2xl:p-8 absolute bottom-0 left-0 right-0">
                                <h5 class="text-base font-semibold mb-2 2xl:text-2xl">Wesley van Genk</h5>
                                <p class="text-base leading-3 2xl:text-2xl">Bedrijfsleider</p>
                            </div>
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
    name: "TheTestimonial",
    components: {
        TheHeading
    }
}
</script>
<style >
.testimonial-list__text{
    @apply text-xs flex gap-1 lg:text-lg 2xl:text-xl
}
.testimonial-list__text + .testimonial-list__text{
    @apply mt-4
}
.testimonal-slider .slick-prev::before {
    content: "";
    background-image: url(../images/left-arrow.svg);
    background-size: 13px 25px;

    @apply p-5 bg-green-color flex justify-center items-center bg-no-repeat bg-center absolute bottom-[-35px] left-0 z-20 md:bottom-[-55px] lg:p-6
}

.testimonal-slider .slick-next::before {
    content: "";
    background-image: url(../images/right-arrow.svg);
    background-size: 13px 25px;

    @apply p-5 bg-green-color flex justify-center items-center bg-no-repeat bg-center absolute bottom-[-35px] left-14 z-30 md:bottom-[-55px] lg:p-6
}
.testimonal-slider .slick-list.draggable {
    @apply pr-[100px]
}
.testimonal-slider__block{
    @apply mr-6 lg:mr-6
}
</style>