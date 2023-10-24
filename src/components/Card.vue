<template>
  <div class="card">
    <img :src="src" :alt="alt" class="card-img"/>
    <div class="card-info">
      <img :src="avatar" alt="Owner Avatar" class="owner-avatar"/>
      <p class="owner-name">Owned by {{ owner }}</p>
      <p class="card-price">{{ priceUsd }}</p>
      <p class="card-price">{{ priceEth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    type: String,
    alt: String,
    avatar: String,
    owner: String,
    priceUsd: Number,
    priceEth: Number,
  }
}
</script>

<style>
.card{
  display: flex;
  flex-direction: column;
}
.card-img {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 326px; 
  display: block;
  object-fit: cover;
}

.card-info {
  background: #000; 
  
}
</style>