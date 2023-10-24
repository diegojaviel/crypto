<template>
  <div class="container"> 
    <div class="blur-circle"></div>
    <div class="left">
      <div class="content">
        <div class="content-title">
          <h1>O Maior Marketplace de NFTs do Brasil</h1>
        </div>
        <div class="buttons">
          <img src="../assets/google.jpg" alt="">
          <img src="../assets/apple.jpg" alt="">
        </div>
      </div>
    </div>

    <div class="right">
      <img src="../assets/hero-banner.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
  display: flex;
}
.blur-circle {
  position: absolute;
  background: #7f35ff;
  border-radius: 50%;
  width: 854px;
  height: 852px;
  filter: blur(250px);
  top: -712px;
  left: 370px;
  right: 216px;
  }
.left {
    width: 515px;
    margin-top: 180px;
    margin-left: 149px;
    margin-right: 24px;
    margin-bottom: 260px;
}
.left h1 {
  font-size: 64px;
  font-weight: 900;
  flex-shrink: 1;
}
.buttons{
  display: flex;
  gap: 24px;
  position: relative;
  margin-top: 32px;
}

.buttons img{
  width: 215px;
  cursor: pointer;
}

.right{
  margin-top: 90px;
  margin-right: 150px;
}

.right img{
  width: 570px;
}
</style>