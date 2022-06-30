

<template>
 <div class="container">
    <User />
    <Transactions />
  </div>
</template>

<script>
import User from './components/User'
import Transactions from './components/Transactions'


export default {
  name: 'App',
  components: {
    User,
    Transactions,
  },
  beforeMount(){
    this.$store.dispatch('loadAppData');
 },
}
</script>

<style lang="scss">

body{
    background-color: var(--main-bg-color);
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
}
  
  .container{
    width: min(100% - 8rem, 800px);
    margin-inline: auto;
    border: 1px solid var(--gray);
    padding: 1rem 2rem;
    margin-top:5rem;

    background-color: var(--white);
    border-color: var(--gray);
  }


  
</style>
