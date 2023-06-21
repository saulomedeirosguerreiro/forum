<template>
  <header class="header" id="header">

<router-link :to="{ name: 'Home' }" class="logo">
    <img src="@/assets/img/svg/vueschool-logo.svg" >
</router-link>

<nav class="navbar">
<ul>
    <li class="navbar-user">
        <a href="#">
            <img class="avatar-small" src="https://pbs.twimg.com/profile_images/1188775562657091594/5mgkg44t_400x400.jpg" alt="">
            <span>
                Alex Kyriakidis
                <img class="icon-profile" src="assets/img/svg/arrow-profile.svg" alt="">
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

<script>
export default {

}
</script>

<style>

</style>