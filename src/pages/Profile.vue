<template>
    <div class="container">
      <div class="flex-grid">
        <div class="col-3 push-top">
          <ProfileCard v-if="!props.edit" :user="user" />
          <ProfileCardEditor v-else :user="user" />
        </div>
  
        <div class="col-7 push-top">
          <div class="profile-header">
            <span class="text-lead"> Joker's recent activity </span>
            <a href="#">See only started threads?</a>
          </div>
          <hr />
          <PostList :posts="user.posts" />
        </div>
      </div>
    </div>
  </template>
<script setup>
import { defineComponent, defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import ProfileCard from '@/components/ProfileCard.vue';
import ProfileCardEditor from '@/components/ProfileCardEditor.vue';
import PostList from '@/components/PostList.vue';

defineComponent({
    components: {
        ProfileCard,
        ProfileCardEditor,
        PostList,
    }
})

const props = defineProps({
    edit: Boolean,
})

const store = useStore();

const user = computed(() => store.getters.authUser);


</script>