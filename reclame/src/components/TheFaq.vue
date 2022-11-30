<template>
    <section class="section section--faq">
        <div class="container">
            <div >
                <TheHeading
                    title="<span class='text-green'>Veelgestelde vragen</span> over “trailers plakken”" class="mb-4 max-w-[85%] xsm:max-w-[65%] md:mb-14 xlg:max-w-full  lg:mb-16 2xl:mb-24 2xl:max-w-[55] text-black-color" />
            </div>
            <div class="faq lg:flex lg:gap-9 2xl:gap-12">
                <div class="faq__left lg:flex lg:flex-col gap-9 2xl:gap-[60px] lg:w-[50%]">
                    <details class="faq__details relative bg-gray-color pt-4 pb-6 px-4 mb-4 lg:mb-0 2xl:min-h-[138px] lg:pl-12" v-for="block in faqLeft" :key="block.id">
                        <summary class="faq-content list-none lg:pr-16 ">
                            <h6 class="faq-title text-left text-base font-semibold xsm:text-xl xl:text-3xl">{{block.title}}</h6>
                            <span class="faq-icon absolute right-4 bottom-4 w-4 lg:w-9">
                                <img class="faq-down" src="../images/down-arrow.svg" alt="">
                                <img class="faq-up hidden" src="../images/up-arrow.svg" alt="">
                            </span>
                        </summary>
                        <p class="faq-answer mt-3 text-left text-xs xsm:text-lg lg:text-xl">{{block.summary}}
                        </p>
                    </details>
                </div>
                <div class="faq__right" id="faq__right" v-if="faq">
                    <details class="faq__details relative bg-gray-color pt-4 pb-6 px-4 mb-4" v-for="block in faqRight" :key="block.id">
                        <summary class="faq-content list-none">
                            <h6 class="faq-title text-left text-base font-semibold xsm:text-xl lg:text-3xl">{{block.title}}</h6>
                            <span class="faq-icon absolute right-4 bottom-4 w-4">
                                <img class="faq-down" src="../images/down-arrow.svg" alt="">
                                <img class="faq-up hidden" src="../images/up-arrow.svg" alt="">
                            </span>
                        </summary>
                        <p class="faq-answer mt-3 text-left text-xs xsm:text-lg lg:text-xl">{{ block.summary }}
                        </p>
                    </details>
                </div>
                <div class="faq__right hidden lg:flex lg:flex-col gap-9 2xl:gap-[60px] lg:w-[50%]" id="faq__right">
                    <details class="faq__details relative bg-gray-color pt-4 pb-6 px-4 mb-4 lg:mb-0 lg:pl-12 2xl:min-h-[138px]" v-for="block in faqRight" :key="block.id">
                        <summary class="faq-content list-none lg:pr-16 ">
                            <h6 class="faq-title text-left text-base font-semibold xsm:text-xl xl:text-3xl">{{block.title}}</h6>
                            <span class="faq-icon absolute right-4 bottom-4 w-4 lg:w-9">
                                <img class="faq-down" src="../images/down-arrow.svg" alt="">
                                <img class="faq-up hidden" src="../images/up-arrow.svg" alt="">
                            </span>
                        </summary>
                        <p class="faq-answer mt-3 text-left text-xs xsm:text-lg lg:text-xl">{{ block.summary }}
                        </p>
                    </details>
                </div>
                <div class="action-block mt-16 lg:hidden" >
                    <a href="javascript:;" class="action-btn" @click="faq = !faq">LESS MEER</a>
                </div>
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
    data: () => ({
        faq: false,
        faqLeft: [
            {
                id: "1",
                title: "Eenontwerp dat zorgt voor meer naamsbekendheid",
                summary: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer naamsbekendheid en zorgen we dat de trailer past bij de huisstijl.",
            },
            {
                id: "2",
                title: "Wat komt er op de trailer te staan? asdfghj",
                summary: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer ",
            },
            {
                id: "3",
                title: "Plakken jullie ook op locatie? sdfghjk ertyui",
                summary: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer naamsbekendheid",
            }
        ],
        faqRight: [
            {
                id: "1",
                title: "Hoe lang duurt het voordat mijn trailer is geplakt?",
                summary: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer naamsbekendheid en zorgen we dat de trailer past bij de huisstijl.",
            },
            {
                id: "2",
                title: "Wat als ik al een ontwerp heb voor de trailer?",
                summary: "Met een ontwerp van Reclame Rijden weet je zeker dat jouw trailer opvalt. Met een uniek ontwerp genereer je meer ",
            },
            {
                id: "3",
                title: "Wat als ik al een ontwerp heb voor de trailer?",
                summary: "Bij Reclame Rijden adviseren we om in de eerste twee weken na het aan-brengen van de trailerreclame niet met de trailer door de wasstraat te rijden. Na die periode is het prima mogelijk, maar kijk wel uit met het gebruik van een hogedrukspuit! Deze kan ervoor zorgen dat de randen van de folie omhoog krullen, waardoor logo’s of full colour prints los kunnen komen. En dat is natuurlijk zonde.",
            },
        ],
    }),
}
</script>
<style>
details[open] .faq-down{
    @apply hidden
}
details[open] .faq-up {
    @apply block
}
details[open] .faq-title {
    @apply text-green-color
}
</style>