import Login from './components/Login.vue';
import Home from './components/Home.vue';
const router = new VueRouter({
  routes: [{
          path:'index',
          name: 'login',
          component: Login
  },
    {
      path: 'restapi_button2',
      component: Home,
      meta:{ requiresAuth:true}
    }
  ]
})
export default router
