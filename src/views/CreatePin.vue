<script></script>

<template>
  <div class="contents">
    <div class="create-pin-wrapper">
      <div class="logo">
        <img src="../assets/logo.svg" alt="" />
      </div>

      <div class="content-wrapper">
        <div class="content-left">
          <div class="log">Create Pin</div>
          <div class="welcome-note">Create Pin to enable transfer</div>
        </div>

        <div class="pin-holder">
          <div class="note">Kindly Create your transaction pin</div>

          <div class="box-wrapper mt-6">
            <input
              class="number-box"
              type="password"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              class="number-box"
              type="password"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              class="number-box"
              type="password"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              class="number-box"
              type="password"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
          </div>

          <button class="create-pin">Create pin</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-pin-wrapper {
  margin: 80px 120px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
}

.log {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 46px;
  line-height: 48px;
  color: var(--text-dark);
  margin-top: 50px;
}
.welcome-note {
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
  margin-top: 20px;
  color: var(--gray3);
}

.pin-holder {
  background: white;
  width: 30vw;
  padding: 32px;
}

.note {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.2px;
}

.box-holder {
  display: flex;
  justify-content: space-evenly;
  margin-top: 24px;
}
input {
  width: 100%;
  height: 100%;

  border: 1px solid black;
}

.box {
  width: 52px;
  height: 48px;
}
.create-pin {
  width: 100%;
  border-radius: 8px;
  height: 48px;
  background: var(--primary);
  margin-top: 24px;
  color: white;
}
.number-box {
  width: 48px;
  height: 48px;
  border: 1px solid #dee3eb;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0px 12px;
  text-align: center;
}

.number-box::placeholder {
  text-align: center;
}
.box-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
