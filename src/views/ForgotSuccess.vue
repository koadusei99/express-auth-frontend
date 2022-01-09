<script></script>

<template>
  <div class="app">

    <div class="app-container">
      <div class="logo"><img src="../assets/logo.svg" alt=""></div>

      <div class="content-wrapper">
        <div class="content-left">
          <div class="log">OTP Verification</div>
          <div class="welcome-note">A code has been sent to your email</div>
        </div>


        <div class="content-right white-card">
          <form action="" class="register">
            <div class="image-wrapper">
              <img src="../assets/Group.png"/>
            </div>
            <div class="text-wrapper">
              <p class="head">Check Your Inbox</p>
              <p class="body">Password reset link has been sent to your inbox</p>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.app-container{
  margin: 80px 140px;
}
.logo
{
  width: 37px;
}
.content-wrapper{
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  
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

.content-right{
  padding: 32px;
  border-radius: 8px; 
  width: 528px;
  text-align: center;
}
.image-wrapper img
{
  width: 165px;
}
.image-wrapper
{
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
.head
{
  font-weight: 600;
  font-size: 32px;
  color: var(--text-dark);
  margin: 8px 0px;
}
.body
{
  color: var(--gray2);
  font-size: 14px;
  margin: 8px 0px;
}
</style>
