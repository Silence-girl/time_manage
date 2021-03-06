import Welcome from '../pages/welcome.vue'
import Record from '../pages/record.vue'
import Friends from '../pages/friends.vue'
import Find from '../pages/find.vue'
import Mine from '../pages/mine.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/record',
    name: 'Record',
    component: Record
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

export default routes
