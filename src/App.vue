
<template>
 <div class="container">
    <Transition name="fade" mode="out-in">
        <div v-show="!isLoading">
          <User />
          <Transactions />
        </div>
  </Transition>
  <Transition name="fade" mode="out-in">
    <div class="spinner" v-show="isLoading">
        <font-awesome-icon icon="fa-solid fa-spinner" spin-pulse />
    </div>
  </Transition>
    
  </div>
</template>

<script>
import User from './components/User'
import Transactions from './components/Transactions'
import {mapState} from 'vuex';

export default {
  name: 'App',
  components: {
    User,
    Transactions,
  },
    computed: {
      ...mapState(['isLoading']),
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
    min-height: 15rem;
    background-color: var(--white);
    border-color: var(--gray);
    position:relative;
  }

  .spinner{
    font-size: 4rem;
    color:var(--primary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

  
</style>
