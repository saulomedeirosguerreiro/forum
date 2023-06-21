import { createStore } from 'vuex'
import sourceData from '@/data.json';

export default createStore({
    state: {
        authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
        ...sourceData
    },
    getters: {
        authUser: state =>  state.users.find(user => user.id === state.authId),
    },
    actions: {
        createPost({ commit }, post) {
            commit('setPost', { post });
            commit('appendPostToThread', { postId: post.id, threadId: post.threadId})
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post);
        },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId);
        }
    },
})