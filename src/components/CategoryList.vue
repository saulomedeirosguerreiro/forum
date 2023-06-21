<template>
    <ForumList
      v-for="category in categories"
      :key="category.id"
      :forums="getForumsForCategory(category)"
      :title="category.name"
      :category-id="category.id"
    />
  </template>
  
  <script setup>
  import { defineComponent, defineProps } from 'vue';
  import { useStore } from 'vuex';
  import ForumList from '@/components/ForumList'
  
  defineComponent({
    components: {
      ForumList,
    }
  });

  defineProps({
    categories: {
        required: true,
        type: Array
    },
  })

  const store = useStore();
 
  function getForumsForCategory (category) {
    return store.state.forums.filter(forum => forum.categoryId === category.id)
  }
  </script>
  
  <style scoped>
  </style>