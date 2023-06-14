import HomePage from '@/pages/HomePage';
import ThreadShow from '@/pages/ThreadShow';
import NotFound from '@/pages/NotFound';
import { createRouter, createWebHistory} from 'vue-router';
import sourceData  from '@/data.json';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter(to, from, next) {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
            if(threadExists) {
                next();
            } else {
                next({
                    name: 'NotFound',
                    params: {
                        pathMatch: to.path.substring(1).split('/')
                    },
                    query: to.query,
                    hash: to.hash,
                })
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;