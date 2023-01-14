import Main from '@/pages/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '@/pages/posts.vue'
import StatsPage from '@/pages/stats.vue'

const routes = [
    { 
        path: '/',
        component: Main
    },
    { 
        path: '/posts',
        component: PostsPage
    },
    { 
        path: '/stats',
        component: StatsPage
    }
]

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})

export default router;