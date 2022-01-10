<script>
export default {
  name: "About",
};
</script>

<template>
  <p class="head">Meet The Team</p>
  <div class="container">
    <div class="slider">
      <input
        type="radio"
        name="slider"
        title="slide1"
        checked="checked"
        class="slider__nav"
      />
      <input type="radio" name="slider" title="slide2" class="slider__nav" />
      <input type="radio" name="slider" title="slide3" class="slider__nav" />
      <input type="radio" name="slider" title="slide4" class="slider__nav" />
      <input type="radio" name="slider" title="slide5" class="slider__nav" />

      <div class="slider__inner">
        <div class="slider__contents">
          <img class="slider__image" src="../assets/slide2.jpg" />
          <h2 class="slider__caption">Meet Daverose</h2>
          <p class="slider__txt">
            Does mainly front-end, very confused when it come to backend. Needs
            to learn back-end by hook or crook.
          </p>
        </div>
        <div class="slider__contents">
          <img class="slider__image" src="../assets/slide1.jpg" />
          <h2 class="slider__caption">Meet David</h2>
          <p class="slider__txt">
            One of our lead Developers. Couldn't find images online, so i used
            an image of my one of my favorite David's.
          </p>
        </div>
        <div class="slider__contents">
          <img class="slider__image" src="../assets/Kwaku-Adusei-Okyere.jpg" />
          <h2 class="slider__caption">Meet Kwaku</h2>
          <p class="slider__txt">
            One of the lead developers, also couldn't find a close-up picture,
            the guy was standing miles away. Anyway, he likes to animate
            himself.
          </p>
        </div>
        <div class="slider__contents">
          <img class="slider__image" src="../assets/mark.jfif" />
          <h2 class="slider__caption">Meet Mark</h2>
          <p class="slider__txt">
            It's impressive how he catches on easily, a real company guy, eager
            to learn. P.s i believe he thinks he is the fine boy of the group,
            has changed his profile picture twice.
          </p>
        </div>
        <div class="slider__contents">
          <img class="slider__image" src="../assets/papa.jfif" />
          <h2 class="slider__caption">Meet Papa</h2>
          <p class="slider__txt">
            Can juggle a lot of tasks, a multi-tasker, eager to learn and work,
            i believe our product owner (i think). Anyways, he is a celebrity,
            guy has more online presence, than the whole group combined.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}
.head {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  text-align: center;
  margin: 15px 0px;
}
.container {
  height: fit-content;
  width: 40%;
  box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
    -8px -8px 18px 0 rgba(255, 255, 255, 0.55);
  border-radius: 5px;
  padding: 125px 0px;
  margin: 50px auto;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}
.container::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.slider {
  height: 100%;
  position: relative;
  margin: 10% auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.slider__nav {
  position: relative;
  top: 175px;
  width: 12px;
  height: 12px;
  margin: 2rem 12px;
  border-radius: 50%;
  z-index: 10;
  outline: 6px solid #fff;
  outline-offset: -6px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.slider__nav:checked {
  -webkit-animation: check 0.4s linear forwards;
  animation: check 0.4s linear forwards;
}
.slider__nav:checked:nth-of-type(1) ~ .slider__inner {
  left: 0%;
}
.slider__nav:checked:nth-of-type(2) ~ .slider__inner {
  left: -100%;
}
.slider__nav:checked:nth-of-type(3) ~ .slider__inner {
  left: -200%;
}
.slider__nav:checked:nth-of-type(4) ~ .slider__inner {
  left: -300%;
}
.slider__nav:checked:nth-of-type(5) ~ .slider__inner {
  left: -400%;
}
.slider__inner {
  position: absolute;
  left: 0;
  width: 500%;
  height: 100%;
  -webkit-transition: left 0.4s;
  transition: left 0.4s;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
}
.slider__contents {
  height: 100%;
  padding: 1rem;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-flow: column nowrap;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.slider__image {
  width: 100px;
  height: 100px;
  box-shadow: 7px 7px 10px #acacac, -7px -7px 10px #ffffff;
  border-radius: 50%;
}
.slider__caption {
  font-weight: 500;
  margin: 2rem 0 1rem;
  padding: 10px;
  text-transform: uppercase;
  padding: 10px;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
.slider__txt {
  color: #999;
  margin-bottom: 3rem;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

@-webkit-keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}

@keyframes check {
  50% {
    outline-color: #333;
    box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
  }
  100% {
    outline-color: #333;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
  }
}
</style>