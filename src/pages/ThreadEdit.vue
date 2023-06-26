<template>
  <div class="col-full push-top">
    <h1>
      Editing <i>{{ thread.title }}</i>
    </h1>

    <ThreadEditor :title="thread.title" :text="text" @save="save" @cancel="cancel" />
  </div>
</template>
<script setup>
import { defineComponent, computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ThreadEditor from '@/components/ThreadEditor'
import { findById } from '@/helpers'

const store = useStore();
const router = useRouter();

const props = defineProps({
  id: { type: String, required: true }
})

const thread = computed(() => findById(store.state.threads, props.id));
const text = computed(() => findById(store.state.posts, thread.value.posts[0]).text);

defineComponent({
  components: { ThreadEditor }
});

async function save({ title, text }) {
  const thread = await store.dispatch('updateThread', {
    id: props.id,
    title,
    text
  })
  router.push({ name: 'ThreadShow', params: { id: thread.id } })
}

function cancel() {
  router.push({ name: 'ThreadShow', params: { id: props.id } })
}
</script>