<template>
  <div class="container">
    <h1>Welcome Threads</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue';
import CategoryList from '@/components/CategoryList'

defineComponent({
  components: {
    CategoryList,
  }
})

const store = useStore();

const categories = computed(() => store.state.categories);
</script>

<style>
</style>