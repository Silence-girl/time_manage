<template>
  <div class="index">
    <img class="index-bg" src="../assets/banner.jpg">
    <div class="index-topbox">
      <div class="index-topbox-radius">
        <div class="index-topbox-text">
          <h3 v-text="word"></h3>
          <p>
            <span>{{ date.month }}</span>
            <span>{{ date.day }}</span>
            <span>{{ date.week }}</span>
            <span>{{ date.year }}</span>
          </p>
        </div>
      </div>
      <router-link class="button button-error" :to="{ name: 'Record' }">Do it</router-link>
      <span class="tip" v-text="tip"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: {
          year: '',
          month: '',
          week: '',
          day: ''
        }
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        this.setDate()
      },
      setDate () {
        let now = new Date()
        let Month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spt', 'Oct', 'Nov', 'Dec' ]
        let Week = [ 'SUN', 'MON', 'TUSE', 'WED', 'THUR', 'FRI', 'SAT' ]
        let yy = now.getFullYear()
        let mm = Month[now.getMonth()]
        let dd = now.getDate()
        let ww = Week[now.getDay()]
        this.date.year = yy
        this.date.month = mm + '.'
        this.date.week = ww
        this.date.day = dd
      }
    },
    computed: {
      word: function () {
        let now = new Date()
        let hh = now.getHours()
        let time = [ 3, 6, 8, 11, 13, 17, 19, 23 ]
        let text = [ '深夜咯', '早上好', '上午好', '中午好', '下午好', '日暮里', '晚上好', '夜深了' ]
        for (let i = 0; i < time.length; i++) {
          if (hh >= time[i] && hh < time[i + 1]) {
            return text[i]
          }
          if (hh < time[i] || hh >= time[time.length - 1]) {
            return text[text.length - 1]
          }
        }
      },
      tip: function () {
        let now = new Date()
        let tips = [
          '习惯就是人生的最大指导',
          '我们坚持一件事情，并不是因为这样做了会有效果，而是坚信，这样做是对的',
          '凡不能杀死你的，终使你更加强大',
          '要从容地着手去做一件事，但一旦开始，就要坚持到底',
          '向着某一天终于要达到的那个终极目标迈步还不够，还要把每一步骤看成目标，使它作为步骤而起作用',
          '一个人只要强烈地坚持不懈地追求，他就能达到目的',
          '要在这个世界上获得成功，就必须坚持到底：至死都不能放手'
        ]
        return tips[now.getDay()]
      }
    }
  }
</script>

<style>
  .index, .index .index-topbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .index>img.index-bg {
    width: 100%;
    height: 100%;
  }
  .index .index-topbox{
    position: absolute;
    background: rgba(206, 202, 202, 0.2);
  }
  .index .index-topbox-radius{
    margin: 10.71rem auto 0;
    width: 19.64rem;
    height: 19.64rem;
    border-radius: 50%;
    border: .29rem solid rgba(255, 255, 255, 0.5);
  }
  .index .index-topbox .index-topbox-text {
    margin-top: 5rem;
    margin-left: 5rem;
    width: 9.64rem;
    height: 9.64rem;
  }
  .index .index-topbox h3 {
    padding: .89rem 0;
    font-family: "宋体";
    font-size: 2.68rem;
    color: #fff;
    text-align: center;
    letter-spacing: .36rem;
  }
  .index .index-topbox .button-error {
    display: block;
    margin: 2.86rem auto 0;
    width: 9.64rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 2.5rem;
    box-shadow: 1px -1px #ff1a1a;
    font-size: 1.21rem;
    color: #fff;
  }
  .index .index-topbox p {
    padding: .54rem 0;
    border-top: .07rem solid #fff;
    border-bottom: .07rem solid #fff;
    font-size: .86rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }
  .index .index-topbox p span {
    margin-right: .18rem;
  }
  .index .index-topbox span.tip {
    margin-top: 4.29rem;
    display: block;
    font-size: .79rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }
  .index .index-topbox p span:last-child {
    margin-left: .36rem;
    color: #fff;
  }
</style>
