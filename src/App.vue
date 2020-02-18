<template>
    <div>
      <Section3/>
      <Section6/>
        <Roadmap />
        <Pricing />
    </div>
</template>

<script>
import Section3 from './components/section3/Section3'
import Section6 from './components/section6/Section6'

export default {
  name: 'App',
  components:{
    Section3,
    Section6
  }
  
};
</script>



<style>
    
</style>
