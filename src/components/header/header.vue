<template>
  <div id="header" :class="{ 'is-fixed': fixed }">
    <i class="iconfont icon-menu" @click="toggle()"></i>
    <h1></h1>
    <nav class="heda-menu" v-show="showMenu">
      <i class="iconfont icon-cancel" @click="toggle()"></i>
      <router-link v-for="item in navList" :key="item.path" :to="{ name: item.path }" exact>
          <i v-if="item.icon" :class="'icon-' + item.icon" class="iconfont"></i>
          {{ item.title || '' }}
        </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          { title: '记录', path: 'Record', icon: 'record' },
          { title: '圈子', path: 'Friends', icon: 'friends' },
          { title: '发现', path: 'Find', icon: 'find' },
          { title: '我', path: 'Mine', icon: 'mine' }
        ],
        showMenu: false
      }
    },
    props: {
      fixed: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggle: function () {
        this.showMenu = !this.showMenu
      }
    }
  }
</script>
<style scoped>
  #header{
    display: flex;
    padding: .83rem;
    width: 100%;
    color: #fff;
  }
  #header.is-fixed {
    position: fixed;
    top: 0;
  }
  #header h1{
    font-size: 1.17rem;
  }
  #header>.iconfont{
    font-size: 1.17rem;
  }

  #header .icon-menu{
    float: left;
  }

  .heda-menu{
    padding: 1.25rem;
    background: #918cb8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .heda-menu a{
    display: block;
    height: 3.13rem;
    line-height: 3.13rem;
    font-size: 1rem;
    color: #fff;
    text-indent: .83rem;
    border-bottom: .08rem solid rgba(255, 255, 255, 0.5);
  }
  .heda-menu .iconfont{
    font-size: 1.08rem;
  }
  .heda-menu .icon-cancel{
    font-size: 1.25rem;
  }
</style>
