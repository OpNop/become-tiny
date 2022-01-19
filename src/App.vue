<template>
  <div>
    <video autoplay muted loop id="background">
      <source
        src="https://taimi.jumpsfor.science/JumpinTaimiV3.mp4"
        type="video/mp4"
      />
    </video>
    <div id="app">
      <dialog-main @exit="talking = false" v-show="talking" />
      <talk-button @click.native="talking = true" v-show="!talking" />
    </div>
  </div>
</template>

<script>
import DialogMain from "./components/DialogMain.vue";
import TalkButton from "./components/TalkButton.vue";

export default {
  name: "App",
  components: {
    DialogMain,
    TalkButton,
  },
  data() {
    return {
      talking: true,
    };
  },
};
</script>

<style>
video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
