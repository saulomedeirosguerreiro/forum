<template>
    <h1>{{ category.name }}</h1>
    <ForumList
      :title="category.name"
      :forums="getForumsForCategory(category)"
    />
  </template>
  
  <script setup>
  import { defineComponent, defineProps, computed} from 'vue';
  import ForumList from '@/components/ForumList'
  import sourceData from '@/data.json'

  defineComponent({
    components: {
      ForumList,
    }
  })

  const props = defineProps({
    id: {
        required: true,
        type: String
      }
  })

  const category = computed(() => sourceData.categories.find(category => category.id === props.id))
  
  function getForumsForCategory (category) {
    return sourceData.forums.filter(forum => forum.categoryId === category.id)
  }
  </script>
  
  <style scoped>
  </style>