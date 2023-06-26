<template>
    <div class="col-large push-top">
        <h1>
          {{ thread.title }}
          <router-link
            :to="{ name: 'ThreadEdit', id: props.id }"
            class="btn-green btn-small"
          >
            Edit Thread
          </router-link>
        </h1>
  
        <post-list :posts="threadPosts" />

        <post-editor @save="addPost" />
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'; 
  import { computed, defineProps, defineComponent } from 'vue';
  import PostList from '@/components/PostList.vue';
  import PostEditor from '@/components/PostEditor.vue';
  import { findById } from '@/helpers'
  
  const store = useStore();

  const posts = computed(() => store.state.posts);
  const threads = computed(() => store.state.threads);


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

  const thread = computed(() => findById(threads.value, props.id));
  const threadPosts = computed(() => posts.value?.filter(post => post.threadId === props.id));

  function addPost(eventData) {
    const post = {
      ...eventData.post,
      threadId: props.id,
    }
    
    store.dispatch('createPost', post);
  }
  </script>
  
  <style>
  </style>