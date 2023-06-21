<template>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>
  
    <div class="col-full push-top">
      <ThreadList :threads="threads"/>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { defineComponent, defineProps, computed} from 'vue'
  import ThreadList from '@/components/ThreadList'

  defineComponent({
    components: {
      ThreadList,
    }
  });

  const props = defineProps({
    id: {
        required: true,
        type: String
      }
  });

  const store = useStore();

  const forum = computed(() => store.state.forums.find(forum => forum.id === props.id))
  const threads = computed(() => store.state.threads.filter(thread => thread.forumId === props.id))

  </script>
  
  <style scoped>
  </style>