<template>
  <div id="app">
    <TheHeader/>
    <TheCover/>
    <TheFeature/>
    <TheSpecialist/>
    <TheSlider/>
    <TheTrailer/>
    <TheTestimonial/>
    <TheFaq/>
    <TheContact/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheCover from "./components/TheCover.vue";
import TheFeature from "./components/TheFeature.vue";
import TheSpecialist from "./components/TheSpecialist.vue";
import TheTrailer from "./components/TheTrailer.vue";
import TheFaq from "./components/TheFaq.vue";
import TheContact from "./components/TheContact.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSlider from "./components/TheSlider.vue";
import TheTestimonial from "./components/TheTestimonial.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheCover,
    TheFeature,
    TheSpecialist,
    TheSlider,
    TheTrailer,
    TheFaq,
    TheContact,
    TheFooter,
    TheTestimonial
  }
}
</script>

<style lang="scss">
#app {
  @apply font-Saira;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  @apply m-0 p-0
}
</style>
