<template>
  <div class="container">
    <div class="cards-header">
      <div class="cards-title">
        <p class="tagline">Trending</p>
        <h2>Popular Artwork</h2>
      </div>
      <div class="cards-filters">
        <a href="#" class="active">All</a>
        <a href="#">Cyberpunk</a>
        <a href="#">3D</a>
        <a href="#">Video</a>
        <a href="#">GIF</a>
        <a href="#">AI Art</a>
      </div>
    </div>

      <div class="cards-section">
        <div class="card">
          <img src="../assets/card1.png" alt="Card 1">
          <img src="../assets/card2.png" alt="Card 1">
          <img src="../assets/card3.png" alt="Card 1">
          <img src="../assets/card4.png" alt="Card 1">
        </div>
      </div>
  </div>
</template>



<script>
export default {

}
</script>

<style scoped>
.cards-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto; 
  margin-top: 70px;
  width: 80%;
}
.cards-title {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.cards-title .tagline{
  text-align: left;
  color: #7F35FF;
}
.cards-filters {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.cards-filters a{
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 18px;
  border: 1px solid #1F1B26;
}
.cards-filters a.active, .cards-filters a:hover{
  border: 1px solid #7F35FF;
}
</style>