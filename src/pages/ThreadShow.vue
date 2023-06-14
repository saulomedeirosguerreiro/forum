<template>
    <div class="container">
        <h1>{{ thread.title }}</h1>
  
        <post-list :posts="threadPosts"/>
    </div>
  </template>
  
  <script setup>
  import sourceData from '@/data.json'
  import { reactive, computed, defineProps, defineComponent } from 'vue';
  import PostList from '@/components/PostList.vue';
  
  const posts = reactive(sourceData.posts);
  const threads = reactive(sourceData.threads);

  defineComponent({
    components: {
      PostList,
    }
  });

  const props = defineProps({
    id: {
        type: String,
        required: true,
    }
  });

  const thread = computed(() => threads.find(thread => thread.id === props.id));
  const threadPosts = computed(() => posts.filter(post => post.threadId === props.id));
  </script>
  
  <style>
  </style>