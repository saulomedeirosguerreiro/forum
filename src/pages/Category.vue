<template>
    <h1>{{ category.name }}</h1>
    <ForumList
      :title="category.name"
      :forums="getForumsForCategory(category)"
    />
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { defineComponent, defineProps, computed} from 'vue';
  import { findById } from '@/helpers'
  import ForumList from '@/components/ForumList'

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

  const store = useStore();

  const category = computed(() => findById(store.state.categories, props.id))
  
  function getForumsForCategory (category) {
    return store.state.forums.filter(forum => forum.categoryId === category.id)
  }
  </script>
  
  <style scoped>
  </style>