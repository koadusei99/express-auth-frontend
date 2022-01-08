<script></script>

<template>
  <div class="app">

    <div class="app-container">
      <div class="logo"><img src="../assets/logo.svg" alt=""></div>

      <div class="content-wrapper">
        <div class="content-left">
          <div class="log">Log in</div>
          <div class="welcome-note">Great to have you back</div>
        </div>


        <div class="content-right white-card">
          <form action="" class="login">
            <div class="input-wrapper">
            <div class='label'><label for="mail">email address</label></div>
            <input type="email" class="email" name="mail">
            </div>
            
            <div class="input-wrapper">
             <div class='label'><label for="password">password</label></div>
            <input type="password" class="pass" name="password">
            </div>

            <div class="forgot-password">forgot password</div>

            <button class="login-btn">Login</button>

            <div class="final"><span class='account'>Don't have an account?</span> <router-link to="/register" class='now'>Register now</router-link></div>
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
  width: 30vw;
 
}
.label{
  text-transform: capitalize;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--gray2);
  
}

.input-wrapper{
  margin-bottom: 24px;
}
.login-btn{
  margin-top: 24px;
  width: 100%;
}
.forgot-password{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--primary);
}
.login-btn{
  background: var(--primary);
  border-radius: 8px;
  padding: 12px 0;
  color: white;
}
input{
  border: 1px solid #DEE3EB;
  height: 40px;
  border-radius: 4px;
  width: 100%;
}
.label{
  margin-bottom: 8px;
}
.final{
  margin-top: 24px;
  font-size: 14px;
  line-height: 16px;
  color: var(--gray2);
}
.final .now{
  color: var(--primary)

}
</style>
