import { createStore } from 'vuex'
import sourceData from '@/data.json';

export default createStore({
    state: {
        authId: 'jVa6Go6Nl1Urkag1R2p9CHTf4ny1',
        ...sourceData
    },
    getters: {
        authUser: state =>  {
            const user = state.users.find(user => user.id === state.authId);

            if (!user) return null

            return {
                ...user,
                get posts() {
                    return state.posts.filter(post => post.userId === user.id);
                },
    
                get postsCount() {
                    return this.posts.length;
                },
    
                get threads() {
                    return state.threads.filter(thread => thread.userId === user.id);
                },
    
                get threadsCount() {
                    return this.threads.length;
                }
            };

        }
    },
    actions: {
        createPost({ commit, state }, post) {
            post.id = 'qqqq' + Math.random()
            post.userId = state.authId;
            post.publishedAt =  Math.floor(Date.now / 1000);
            commit('setPost', { post });
            commit('appendPostToThread', { postId: post.id, threadId: post.threadId})
        },
        updateUser ({ commit }, user) {
            commit('setUser', { user, userId: user.id })
        }
    },
    mutations: {
        setPost(state, { post }) {
            state.posts.push(post);
        },
        setUser (state, { user, userId }) {
            const userIndex = state.users.findIndex(user => user.id === userId)
            state.users[userIndex] = user
          },
        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads.find(thread => thread.id === threadId)
            thread.posts.push(postId);
        }
    },
})