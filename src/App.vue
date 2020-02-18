<template>
    <div>
      <Home />
      <News />
      <Section3/>
      <Roadmap />
      <Pricing />
      <Section6/>
    </div>
</template>

<script>
import Home from './components/section1/Home'
import News from'./components/section2/News'
import Section3 from './components/section3/Section3'
import Section6 from './components/section6/Section6'
import Roadmap from './components/Roadmap'
import Pricing from './components/Pricing'

export default {
  name: 'App',
  components:{
    Section3,
    Section6,
    Roadmap,
    Pricing,
    Home,
    News
  }
  
};
</script>



<style>
    
</style>
