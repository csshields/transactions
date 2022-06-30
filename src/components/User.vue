<template>
<div class="header">
  <img :src="avatar" alt="Girl in a jacket" width="100"> 
  <div class="welcome">
      Welcome,
      <div class="name">{{userName}}</div>
  </div>
  <div class="balance">
    Total Balance: 
    <div class="total">{{formattedBalance}}</div>
  </div>
  
</div>
</template>

<script>

import {mapGetters, mapState} from 'vuex';

export default {
  computed: {
      ...mapState(['avatar', 'userName', 'balance']),
      ...mapGetters(['formattedBalance']),
  },
  methods: {
      // formatDate(date) {
      //   return moment(date).format("MM/DD/YYYY")
      // },

  },
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: flex-start;
}

.welcome {
  flex-grow: 1;
  margin-left:1rem;
  margin-top:1rem;
}

.name{
  font-size: 2.4rem;
}
.balance{
  padding:1rem 2rem;
  background-color:var(--primary-light);
  width:15rem;
  text-align: right;
  font-size: .9rem;
  .total{
    font-size:2.8rem;
  }
}

</style>