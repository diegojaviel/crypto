<template>
  <header>
    <nav class="container">
      <div class="logo">
        <RouterLink to="/"><img src="../assets/logo.svg" alt="Logo"></RouterLink>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/download">Download</RouterLink>
        <RouterLink to="/nfts">NFTs</RouterLink>
        <RouterLink to="/rank">Rank</RouterLink>
        <RouterLink to="/newsletter">Newsletter</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {

}
</script>

<style scoped>
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 16px;
}

.nav-routes{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;
}

.nav-routes a {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration: none;
  transition: 0.5s;
}
.nav-routes a:hover{
  color: #7F35FF;
}

</style>