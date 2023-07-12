<template>
  <header class="header" id="header">

<router-link :to="{ name: 'Home' }" class="logo">
    <img src="@/assets/img/svg/vueschool-logo.svg" >
</router-link>

<nav class="navbar">
<ul>
    <li v-if="authUser" class="navbar-user">
        <a href="#">
            <img class="avatar-small" :src="authUser.avatar" :alt="`${authUser.name} profile picture`">
            <span>
                {{ authUser.name }}
                <img class="icon-profile" src="@/assets/img/svg/arrow-profile.svg" alt="">
            </span>
        </a>

        <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
                <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
                <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
        </div>
    </li>
</ul>

<ul>
    <li class="navbar-item">
        <a href="#">Home</a>
    </li>
    <li class="navbar-item">
        <a href="#">Category</a>
    </li>
    <li class="navbar-item">
        <a href="#">Forum</a>
    </li>
    <li class="navbar-item">
        <a href="#">Thread</a>
    </li>
    <!-- Show these option only on mobile-->
    <li class="navbar-item mobile-only">
        <a href="#">My Profile</a>
    </li>
    <li class="navbar-item mobile-only">
        <a href="#">Logout</a>
    </li>
</ul>
</nav>
</header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const authUser = computed(() => store.getters.authUser);
</script>

<style>

</style>