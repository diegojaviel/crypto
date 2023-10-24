<template>
  <Header/>
  <router-view/>
  <Footer/>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

*{
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #000;
  color: #fff;
}

.container{
  max-width: 1440px;
  margin: 0 auto;
}
</style>
