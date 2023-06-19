<template>
  <div class="container">
    <h1>Welcome Threads</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { defineComponent, reactive } from 'vue';
import CategoryList from '@/components/CategoryList'

defineComponent({
  components: {
    CategoryList,
  }
})

const categories = reactive(sourceData.categories);
</script>

<style>
</style>