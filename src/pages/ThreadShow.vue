<template>
    <div class="container">
        <h1>{{ thread.title }}</h1>
  
        <post-list :posts="threadPosts"/>

        <post-editor @save="addPost"/>
    </div>
  </template>
  
  <script setup>
  import sourceData from '@/data.json'
  import { reactive, computed, defineProps, defineComponent } from 'vue';
  import PostList from '@/components/PostList.vue';
  import PostEditor from '@/components/PostEditor.vue';
  
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

  function addPost(eventData) {
    const post = {
      ...eventData.post,
      threadId: props.id,
    }
    
    posts.push(post);
    thread.value.posts.push(post.id);
  }
  </script>
  
  <style>
  </style>