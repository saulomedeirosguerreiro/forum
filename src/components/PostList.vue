<template>
    <div class="post-list">
          <div v-for="post in posts" :key="post.id" class="post">
            <div class="user-info">
              <a href="#" class="user-name">{{
                userById(post.userId).name
              }}</a>
  
              <a href="#">
                <img
                  class="avatar-large"
                  :src="userById(post.userId).avatar"
                  alt=""
                />
              </a>
  
              <p class="desktop-only text-small">107 posts</p>
  
              <p class="desktop-only text-small">23 threads</p>
  
              <span class="online desktop-only">online</span>
            </div>
  
            <div class="post-content">
              <div>
                <p>
                  {{ post.text }}
                </p>
              </div>
            </div>
  
            <div class="post-date text-faded">
              <app-date :timestamp="post.publishedAt" />
            </div>
          </div>
  
          <div class="post">
            <div class="user-info">
              <a href="profile.html#profile-details" class="user-name"
                >Joseph Kerr</a
              >
  
              <a href="profile.html#profile-details">
                <img
                  class="avatar-large"
                  src="https://i.imgur.com/OqlZN48.jpg"
                  alt=""
                />
              </a>
  
              <p class="desktop-only text-small">116 posts</p>
  
              <p class="desktop-only text-small">73 threads</p>
  
              <span class="online desktop-only">online</span>
            </div>
  
            <div class="post-content">
              <div>
                <blockquote class="small">
                  <div class="author">
                    <a href="/user/robin" class=""> robin</a>
                    <span class="time">a month ago</span>
                    <i class="fa fa-caret-down"></i>
                  </div>
  
                  <div class="quote">
                    <p>
                      Is horseradish and Wasabi the same thing? I've heard so many
                      different things.
                    </p>
                  </div>
                </blockquote>
                <p>They're not the same!</p>
              </div>
              <a class="edit-post link-unstyled"><i class="fa fa-pencil"></i></a>
            </div>
  
            <div class="post-date text-faded">6 hours ago</div>
  
            <div class="reactions">
              <button class="btn-xsmall">
                + <i class="fa fa-smile-o emoji"></i>
              </button>
            </div>
          </div>
        </div>
</template>

<script setup>
  import sourceData from '@/data.json'
  import { reactive,defineProps } from 'vue';

  const users = reactive(sourceData.users);

  defineProps({
    posts: {
        type: Array,
        required: true,
    },
  });
  
  function userById(userId) {
      return users.find( user => user.id === userId)
  }
</script>

<style>

</style>