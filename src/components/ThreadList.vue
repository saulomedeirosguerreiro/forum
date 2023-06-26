<template>
    <div class="col-full">
  
      <div class="thread-list">
  
        <h2 class="list-title">Threads</h2>
  
        <div v-for="thread in threads" :key="thread.id" class="thread">
          <div>
            <p>
              <router-link :to="{ name: 'ThreadShow', params: { id: thread.id }}">{{ thread.title }}</router-link>
            </p>
            <p class="text-faded text-xsmall">
              By <a href="#">{{ userById(thread.userId).name }}</a>, 
              <app-date :timestamp="thread.publishedAt" />
            </p>
          </div>
  
          <div class="activity">
            <p class="replies-count">
              {{ thread.repliesCount }} replies
            </p>
  
            <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">
  
            <div>
              <p class="text-xsmall">
                <a href="#">{{ userById(thread.userId).name }}</a>
              </p>
              <p class="text-xsmall text-faded">
                <app-date :timestamp="thread.publishedAt" />
              </p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
<script setup>
  import { defineProps, computed } from 'vue'
  import { useStore } from 'vuex'
  import { findById } from '@/helpers'
  const store = useStore(); 
  const users = computed(() => store.state.users);

  defineProps({
    threads: {
      type: Array,
      required: true,
    }
  })

  function userById (userId) {
    return findById(users.value, userId)
  }
</script>