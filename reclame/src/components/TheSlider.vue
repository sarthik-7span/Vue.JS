<template>
    <section class="py-9 pl-7 overflow-hidden lg:pl-24 2xl:pl-40">
        <div class="slider">
            <div class="slider__gallery pb-20 md:pb-32 lg:pb-44">
                <div class="gallery-slider">
                    <div class="gallery-slider__img">
                        <img src="@/images/chille-truck.jpg" alt="">
                    </div>
                    <div class="gallery-slider__img">
                        <img src="@/images/yellow-truck.jpg" alt="">
                    </div>
                    <div class="gallery-slider__img">
                        <img src="@/images/chille-truck.jpg" alt="">
                    </div>
                    <div class="gallery-slider__img">
                        <img src="@/images/yellow-truck.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="slider__client flex mb-16 md:mb-24 lg:mb-32">
                <div class="client-left flex items-center pr-5 border-r-2 border-black lg:pr-9">
                    <h4 class="text-xl relative whitespace-nowrap font-semibold lg:text-3xl 2xl:text-6xl">Onze klanten</h4>
                </div>
                <div class="client-right pl-5 lg:pl-9">
                    <div class="client-slider">
                        <div class="client-slider__img"><img src="@/images/CLTV-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/DAF-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/Krone-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/Sloot-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/CLTV-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/DAF-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/Krone-icon.png" alt=""></div>
                        <div class="client-slider__img"><img src="@/images/Sloot-icon.png" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="slider__review">
                <div class="review-slider">
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Ons wagenpark is weer verder vernieuwd en dankzij het meedenken
                                en vakkundige werk is onze huisstijl ook weer goed 
                                bedrijfsbussen.”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Stefan van Hooydonk</h6>
                        </div>
                    </div>
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Super bedrijf! Snelle en goede service. Een echte aanrader!”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Casper Collou</h6>
                        </div>
                    </div>
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Fijn bedrijf! Duidelijke communicatie en komen hun afspraken
                                na.”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Thijs Van Den Berg</h6>
                        </div>
                    </div>
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Fijn bedrijf! Duidelijke communicatie en komen hun afspraken
                                na.”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Thijs Van Den Berg</h6>
                        </div>
                    </div>
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Fijn bedrijf! Duidelijke communicatie en komen hun afspraken
                                na.”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Thijs Van Den Berg</h6>
                        </div>
                    </div>
                    <div class="review-block">
                        <img src="@/images/rating-icon.png" alt="" class="rating-img">
                        <div class="text-left bg-gray-color py-9 px-6 h-[275px] 2xl:h-[400px] flex flex-col justify-center">
                            <p class="review-text">“Goede, snelle service met top kwaliteit!”</p>
                            <h6 class="review-title font-semibold lg:text-xl">- Lindsy Aarts</h6>
                        </div>
                    </div>
                </div>
                <div class="action-block mt-9">
                    <a href="javascript:;" class="action-btn">NEEM CONTACT OP</a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "TheSlider",
    
}
</script>
<style>
.review-text{
    @apply font-semibold text-green-color mb-7 lg:text-xl 2xl:text-3xl
}
.slick-prev, .slick-next {
    font-size: 0;
}
.gallery-slider .slick-prev::before{
    content: "";
    background-image: url(@/images/left-arrow.svg);
    background-size: 13px 25px ;

    @apply p-5 bg-green-color flex justify-center items-center bg-no-repeat bg-center absolute bottom-[-35px] md:bottom-[-55px] left-0 z-20 lg:p-6
}
.review-title{
    @apply whitespace-nowrap
}
.gallery-slider .slick-next::before {
    content: "";
    background-image: url(@/images/right-arrow.svg);
    background-size: 13px 25px;

    @apply p-5 bg-green-color flex justify-center items-center bg-no-repeat bg-center absolute bottom-[-35px] md:bottom-[-55px] left-14 z-30 lg:p-6
}
.gallery-slider .slick-list.draggable {
    @apply pr-[150px]
}
.client-right .slick-prev, .client-right .slick-next,.slider__review .slick-prev,.slider__review .slick-next{
    display: none !important;
}
.gallery-slider__img {
    @apply mr-4 lg:mr-14
}
.gallery-slider__img img {
    @apply w-full
}
.slider__review .slick-list.draggable {
    @apply pr-[65px] lg:pr-[100px]
}
.review-block{
    @apply mr-4 lg:mr-9
}
.rating-img{
    @apply w-[40%] mb-4
}
.client-right .slick-track{
    @apply flex items-center
}
.client-right{
    @apply max-w-[62%] xsm:max-w-[80%]
}
.client-slider__img{
    @apply mr-8 md:mr-12
}
.client-right .slick-list.draggable{
    @apply pr-12
}
</style>