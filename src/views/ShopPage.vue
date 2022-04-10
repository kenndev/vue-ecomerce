<template>
  <bread-cramps :breadCrampsUrl='breadCrampsUrl'/>
  <shop-component />
</template>

<script setup>
import ShopComponent from "@/components/ShopComponent.vue";
import BreadCramps from "@/components/BreadCramps.vue";
const breadCrampsUrl = {
    name: 'Shop',
}
</script>

<style></style>
