<template>
  <bread-cramps :breadCrampsUrl='breadCrampsUrl'/>
  <about-component />
  <faq-component />
</template>

<script setup>
import AboutComponent from "@/components/AboutComponent.vue";
import FaqComponent from "@/components/FaqComponent.vue";
import BreadCramps from "@/components/BreadCramps.vue";

const breadCrampsUrl = {
    name: 'About',
}
</script>

<style></style>
