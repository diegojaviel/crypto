<template>
  <div class="card-container">
    <img :src="src" :alt="alt" class="card-img"/>
    <div class="card-info">
      <div class="card-owner">
        <img :src="avatar" alt="Owner Avatar" class="owner-avatar"/>
        <p class="owner-name"><span class="owner">Owned by <br></span> {{ owner }}</p> 
      </div>
      <div class="card-detail">
        <div class="prices">
          <p class="card-price usd">{{ priceUsd }}</p>
          <p class="card-price">{{ priceEth }}</p>
        </div>
      </div>
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

<style scoped>
.card-container {
  position: relative;
  width: 330px;
  height: 500px; /* Adjust according to your image */
  overflow: hidden; /* Hide any overflowing content */
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fit the image inside the card */
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0; 
  background: #000; 
}
.card-owner{
  display: flex;
  gap: 12px;
  flex-direction: row;
}
.owner-name span{
  font-size: 12px;
  color: #625873;
  font-style: italic;
}
.card-detail {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-price.usd{
  color: #4BCE97;
  font-size: 12px;
  font-style: italic;
}


</style>
