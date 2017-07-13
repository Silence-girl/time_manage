<template>
  <footer class="dm-footer" :class="{ 'is-fixed': fixed }">
    <router-link v-for="item in navList" :key="item.path" :to="{ name: item.path }" exact>
      <i v-if="item.icon" :class="'icon-' + item.icon" class="iconfont"></i>
      {{ item.title || '' }}
    </router-link>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          { title: '记录', path: 'Record', icon: 'record' },
          { title: '圈子', path: 'Friends', icon: 'friends' },
          { path: 'Add', icon: 'add' },
          { title: '发现', path: 'Find', icon: 'find' },
          { title: '我', path: 'Mine', icon: 'mine' }
        ]
      }
    },
    props: {
      fixed: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
.dm-footer{
  display: flex;
  padding: .36rem 0 .18rem 0;
  width: 100%;
  height: 3.21rem;
  line-height: normal;
  background: #f7f7f7;
  border-top: .07rem solid #dadada;
}
.dm-footer.is-fixed {
  position: fixed;
  bottom: 0;
}
.dm-footer>a{
  flex: 1;
  margin: 0 auto;
  font-size: .64rem;
  text-align: center;
  text-decoration: none;
}
.dm-footer>a:nth-child(3) i{
  font-size: 3.21rem;
  line-height: 2.5rem;
  color: #63cb74;
}
.dm-footer>a>i{
  display: block;
  font-size: 1.43rem;
}
.dm-footer>a.active{
  color: #63cb74;
}
</style>
