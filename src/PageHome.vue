<template>
  <div class="container">
    <div v-for="thread in threads" :key="thread.id" class="col-large push-top">
      <h1>{{ thread.title }}</h1>

      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{
              userById(postById(postId).userId).name
            }}</a>

            <a href="#">
              <img
                class="avatar-large"
                :src="userById(postById(postId).userId).avatar"
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
                {{ postById(postId).text }}
              </p>
            </div>
          </div>

          <div class="post-date text-faded">
            {{ postById(postId).publishedAt }}
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
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { reactive } from 'vue';

const threads = reactive(sourceData.threads);
const posts = reactive(sourceData.posts);
const users = reactive(sourceData.users);

function postById(postId) {
    return posts.find( post => post.id === postId)
}

function userById(userId) {
    return users.find( user => user.id === userId)
}
</script>

<style>
</style>