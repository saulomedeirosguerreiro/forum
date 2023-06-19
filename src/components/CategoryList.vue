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
  import ForumList from '@/components/ForumList'
  import sourceData from '@/data.json'

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
 
  function getForumsForCategory (category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
  }
  </script>
  
  <style scoped>
  </style>