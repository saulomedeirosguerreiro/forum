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

  const category = computed(() => store.state.categories.find(category => category.id === props.id))
  
  function getForumsForCategory (category) {
    return store.state.forums.filter(forum => forum.categoryId === category.id)
  }
  </script>
  
  <style scoped>
  </style>