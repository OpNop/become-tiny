<template>
  <div id="talkButton">Talk [F]</div>
</template>

<script>
export default {
  name: "TalkButton",
};
</script>

<style lang="scss">
#talkButton {
  background: url("../assets/images/talk.png");
  background-position: center;
  background-repeat: no-repeat;
  bottom: 200px;
  height: 50px;
  left: calc(75vw - 235px);
  padding: 22px 0 0 43px;
  position: absolute;
  width: 190px;

  &:hover {
    background: url("../assets/images/talkHover.png");
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>