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
           <div class="text-wrapper">
             <p class="header">Kindly enter your OTP to verify account</p>
           </div>
           <div class="box-wrapper">
              <input class="number-box" placeholder="0" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
              <input class="number-box" placeholder="0" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
              <input class="number-box" placeholder="0" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
              <input class="number-box" placeholder="0" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
           </div>
           <div class="text-wrapper">
            <span>Didn’t get the code?  </span><router-link to="/verify" class="code">Resend</router-link>
           </div>
           <div class="timer">00:59</div>
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

.text-wrapper
{
  margin-bottom: 24px;
}
.header
{
  font-style: normal;
font-weight: 600;
font-size: 24px;
color: var(--text-dark);
}
.number-box
{
  width: 48px;
  height: 48px;
  border: 1px solid #DEE3EB;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0px 12px;
  text-align: center;
}

.number-box::placeholder
{
  text-align: center;
}
.box-wrapper
{
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  }
.code
{
  color: var(--primary);
  font-size: 14px;
}
.text-wrapper span
{
  font-size: 14px;
  color: var(--gray2);
}

</style>
