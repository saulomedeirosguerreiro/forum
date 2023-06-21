<template>
    <the-nav-bar />
    <router-view />
</template>

<script setup>
import TheNavBar from '@/components/TheNavBar.vue'
import { defineComponent } from 'vue'

defineComponent({
  name: 'App',
  components: { TheNavBar }
})
</script>

<style>
@import 'assets/styles.css'
</style>
