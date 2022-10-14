<template>
  <div>
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor v-for="m in FloorList" :key="m.id" :list='m'/>
      <Brand/>

  </div>  
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name:'Home',
  components:{ListContainer,Recommend,Rank,Like,Floor,Brand},
  
  mounted() {
    this.$store.dispatch('getFloorList')
    
  },

  computed:{
    ...mapState({
      FloorList(state){
        return state.home.floorList
      }
    })
  },

  
    
  


}
</script>

<style>

</style>