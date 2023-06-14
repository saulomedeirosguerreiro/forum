<template>
    <div class="container">
        <h1>{{ thread.title }}</h1>
  
        <post-list :posts="threadPosts"/>

        <form @submit.prevent="addPost">
              <div class="form-group">
                <label for="thread_title">Title:</label>
                <input type="text" id="thread_title" class="form-input" name="title" >
              </div>

              <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea v-model="newPostText" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
              </div>

              <div class="btn-group">
                <button class="btn btn-ghost">Cancel</button>
                <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
              </div>
          </form>
    </div>
  </template>
  
  <script setup>
  import sourceData from '@/data.json'
  import { reactive, computed, defineProps, defineComponent } from 'vue';
  import PostList from '@/components/PostList.vue';
  
  const posts = reactive(sourceData.posts);
  const threads = reactive(sourceData.threads);
  let newPostText = reactive('');

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

  function addPost() {
    const postId = 'gggg' + Math.random();
    const post = {
      id: postId,
      text: this.newPostText,
      publishedAt: Math.floor(Date.now() / 1000),
      threadId: this.id,
      userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
    }
    posts.push(post);
    threads.posts.push(post);
    newPostText = '';
  }
  </script>
  
  <style>
  </style>