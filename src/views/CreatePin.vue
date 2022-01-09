<script></script>

<template>
  <div class="contents">
    <div class="create-pin-wrapper">
      <div class="logo">
        <img src="../assets/logo.svg" alt="">
      </div>

      <div class="content-wrapper">
        <div class="content-left">
          <div class="log">Create Pin</div>
          <div class="welcome-note">Create Pin to enable transfer</div>
        </div>


        <div class="pin-holder">
          <div class="note">Kindly Create your transaction pin</div>

          <div class="box-holder">
            <div class="box"><input type="number" value="*"></div>
            <div class="box"><input type="pin" value="*"></div>
            <div class="box"><input type="pin" value="*"></div>
            <div class="box"><input type="pin" value="*"></div>
          </div>


        <button class="create-pin">Create pin</button>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-pin-wrapper{
  margin: 80px 120px;
}

.content-wrapper{
  display: flex;
  justify-content: space-between;
}

.log{
  text-transform: capitalize;
  font-weight: bold;
  font-size: 46px;
  line-height: 48px;
  color: var(--text-dark);
  margin-top: 50px;
}
.welcome-note{
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  margin-top: 20px;
  color: var(--gray3)
}


.pin-holder{
  background: white;
  width: 30vw;
  padding: 32px;

}

.note{
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.2px;
}

.box-holder{
  display: flex;
  justify-content: space-evenly;
  margin-top: 24px;
}
input{
  width: 100%;
  height: 100%;
  
  border: 1px solid black;
 
}

.box{
  width: 52px;
  height: 48px;
  
}
.create-pin{
  width: 100%;
  border-radius: 8px;
  height: 48px;
 background: var(--primary);
  margin-top: 24px;
  color: white;
}
</style>
