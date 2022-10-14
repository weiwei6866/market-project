<template>
<div>
<Header/>
<router-view></router-view>
<Footer v-show="$route.meta.show"/>
</div>
  
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components:{Header,Footer},

    mounted(){
        this.$store.dispatch("categoryList");
        
    }
}
</script>

<style>

</style>