<template>
  <div id="dialogChoices">
    <div
      class="choiceButton"
      v-for="choice in choices"
      :key="choice.text"
      v-on:click="handleClick(choice)"
    >
      <img width="44" :src="require(`@/assets/images/${choice.type}.png`)" />
      {{ choice.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "DialogChoices",
  props: {
    choices: Array,
  },
  emits: ["continue", "exit"],
  methods: {
    handleClick(choice) {
      switch (choice.type) {
        case "continue":
          this.$emit("continue", choice.next, choice.text);
          break;
        case "back":
          this.$emit("back");
          break;
        case "exit":
          this.$emit("exit");
          break;
        case "heart":
        case "link":
          window.open(choice.url);
          this.$emit("continue", "start");
          break;
        default:
          console.log("Invalid choice type");
      }
    },
  },
};
</script>
<style lang="scss">
#dialogChoices {
  font-size: 12pt;
  font-style: italic;
  height: 200px;
  left: 210px;
  position: relative;
  top: 120px;
  width: 500px;
}
.choiceButton {
  align-items: center;
  display: flex;
  height: 44px;

  &:hover {
    background: url(../assets/images/activeBG.png);
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: 490px 51px;
  }
}
</style>