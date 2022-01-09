<script></script>

<template>
  <div class="app">

    <div class="app-container">
      <div class="logo"><img src="../assets/logo.svg" alt=""></div>

      <div class="content-wrapper">
        <div class="content-left">
          <div class="log">Create Your Account</div>
          <div class="welcome-note">Let's get you started</div>
        </div>


        <div class="content-right white-card">
          <form action="" class="register">
            <div class="input-flex">

            <div>
            <div class='label'><label for="mail">First Name</label></div>
            <input type="text" class="name" name="fname" placeholder="Kingsley">
            </div>

            <div >
            <div class='label'><label for="mail">Last Name</label></div>
            <input type="text" class="name" name="lname" placeholder="Omin">
            </div>
            </div>

             <div class="input-wrapper">
             <div class='label'><label for="email">Email Address</label></div>
            <input type="email" class="email" name="email" placeholder="Kingsleyomin@letshego.com">
            </div>
            
            <div class="input-wrapper">
             <div class='label'><label for="email">Phone Number</label></div>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{5}-[0-9]{4}" placeholder="070 33322 9900">
            </div>

            <div class="input-wrapper">
             <div class='label'><label for="password">password</label></div>
            <input type="password" class="pass" name="password">
            </div>

            <button class="register-btn">Create Account</button>

            <div class="final"><span class='account'>Already have an account?  </span> <router-link to="/login" class='now'>Sign In</router-link></div>
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
}
.label{
  text-transform: capitalize;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--gray2);
  
}

.name
{
  width: 215px;
}
.input-wrapper{
  margin-bottom: 24px;
}
.input-flex{
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
}
.pass ::placeholder
{
 text-align: right;
}
.forgot-password{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--primary);
}
.register-btn{
  background: var(--primary);
  border-radius: 8px;
  padding: 12px 0;
  color: white; 
  width: 100%;
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
