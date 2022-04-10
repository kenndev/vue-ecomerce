<template>
  <bread-cramps :breadCrampsUrl='breadCrampsUrl'/>
  <product-detail />
</template>

<script setup>
import ProductDetail from "@/components/ProductDetail.vue";
import BreadCramps from "@/components/BreadCramps.vue";
const breadCrampsUrl = {
  name: "Product Name",
};
</script>

<style></style>
