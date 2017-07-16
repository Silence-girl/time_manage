<template>
  <div>
    <time-header fixed></time-header>
    <div class="record-banner">
      <div class="tab-box">
        <button type="button" class="active">待完成</button>
        <button type="button">已完成</button>
      </div>
    </div>
    <ul class="record-list">
      <li v-for="item in recordNav" @click="choice(item)">
        <i class="fl iconfont" :class="[item.check ? 'icon-checked' : 'icon-unchecked']"></i>
        <div class="fl">
          <p >{{ item.title }}</p>
          <span>{{ item.time || '' }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import header from '../components/header/header.vue'

  export default {
    data () {
      return {
        recordNav: [
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false },
          { title: 'jquery', time: '2017-07-01 15:30', check: false },
          { title: 'javascript', time: '2017-07-01 15:30', check: false },
          { title: '每日打卡', time: '2017-07-01 15:30', check: false },
          { title: 'html', time: '2017-07-01 15:30', check: false },
          { title: 'css', time: '2017-07-01 15:30', check: false },
          { title: 'jquery', time: '2017-07-01 15:30', check: false },
          { title: 'javascript', time: '2017-07-01 15:30', check: false }
        ]
      }
    },
    methods: {
      choice (item) {
        if (item.check === false) {
          item.check = true
        }
      }
    },
    components: {
      'time-header': header
    }
  }
</script>
<style scoped>
  .record-banner{
    width: 100%;
    height: 12.57rem;
    background: url('../assets/top_banner.jpg') no-repeat;
    background-size: contain;
  }
  .record-banner .tab-box {
    padding-top: 1.07rem;
    text-align: center;
  }
  .record-banner .tab-box button{
    margin: 0 .71rem;
    background: none;
    border:0;
    font-size: 1.14rem;
    color: rgba(255, 255, 255, 0.5);
  }
  .record-banner .tab-box button.active{
    color: #fff;
  }
  .record-list{
    margin: 0 .89rem .83rem;
    padding: 0;
  }
  .record-list>li{
    margin: .83rem 0 0 0;
    padding: .71rem;
    height: 5.36rem;
    line-height: 3.93rem;
    background: #1faff6;
    list-style: none;
    border-radius: .21rem;
    color: #fff;
  }
  .record-list>li>div{
    height: 100%;
    line-height: normal;
  }
  .record-list>li i{
    font-size: 1.79rem;
    margin-right: 1.07rem;
  }
  .record-list>li p, .record-list>li span{
    font-size: 1.29rem;
    line-height: 1.965rem;
  }
  .record-list>li span{
    font-size: 1rem;
  }
</style>
