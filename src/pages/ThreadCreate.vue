<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>

    <ThreadEditor @save="save" @cancel="cancel" />
  </div>
</template>
<script setup>
import ThreadEditor from '@/components/ThreadEditor'
import { findById } from '@/helpers'
import { defineComponent, defineProps, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

defineComponent({
  components: { ThreadEditor }
});

const props = defineProps({
  forumId: { type: String, required: true }
});

const store = useStore();
const router = useRouter();

const forum = computed(() => findById(store.state.forums, props.forumId))

async function save({ title, text }) {
  const thread = await store.dispatch('createThread', {
    forumId: forum.value.id,
    title,
    text
  })
  router.push({ name: 'ThreadShow', params: { id: thread.id } })
}

function cancel() {
  router.push({ name: 'Forum', params: { id: forum.value.id } })
}
</script>