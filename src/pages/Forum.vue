<template>
    <div class="col-full push-top">
      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <router-link
        :to="{name:'ThreadCreate', params: {forumId: forum.id}}"
        class="btn-green btn-small"
        >
          Start a thread
        </router-link>
      </div>
    </div>
  
    <div class="col-full push-top">
      <ThreadList :threads="threads"/>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { defineComponent, defineProps, computed} from 'vue'
  import { findById } from '@/helpers'
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

  const forum = computed(() => findById(store.state.forums, props.id))
  const threads = computed(() => forum.value.threads.map(threadId => store.getters.thread(threadId)))

  </script>
  
  <style scoped>
  </style>