<template>
    <h2 v-html="title" class="text-xl font-semibold text-left xsm:text-2xl xlg:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"></h2>
</template>

<script>
export default {
    name: "TheHeading",
    props: {
        title: String
    }
};
</script>
