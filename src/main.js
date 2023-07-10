import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import AppDate from '@/components/AppDate.vue';
import store from '@/store';
import firebase from 'firebase';
import firebaseConfig from '@/config/firebase'

firebase.initializeApp(firebaseConfig);

const forumApp = createApp(App);
forumApp.use(router);
forumApp.use(store)
forumApp.component('AppDate', AppDate)
forumApp.mount('#app')
