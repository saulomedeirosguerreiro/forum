<template>
  <div class="container">
    <h1>Welcome Threads</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { defineComponent, reactive } from 'vue';
import ThreadList from '@/components/ThreadList.vue';

defineComponent({
  components: {
    ThreadList,
  }
})

const threads = reactive(sourceData.threads);
</script>

<style>
</style>