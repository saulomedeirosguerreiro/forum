<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="thread_content">Content:</label>
      <textarea
        v-model="text"
        id="thread_content"
        class="form-input"
        name="content"
        rows="8"
        cols="140"
      ></textarea>
    </div>

    <div class="btn-group">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Publish">Publish</button>
    </div>
  </form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';

const emit = defineEmits(['save']);

let text = reactive('');

function save() {
    const postId = 'gggg' + Math.random();
    const post = {
      id: postId,
      text: text,
      publishedAt: Math.floor(Date.now() / 1000),
      userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
    }

    emit('save', { post });

    text = '';
  }
</script>

<style>
</style>