<template>
  <div>
    <video autoplay muted loop id="background">
      <source
        src="https://taimi.jumpsfor.science/JumpinTaimiV3.mp4"
        type="video/mp4"
      />
    </video>
    <div id="app">
      <dialog-main />
    </div>
  </div>
</template>

<script>
import DialogMain from "./components/DialogMain.vue";

export default {
  name: "App",
  components: {
    DialogMain,
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
