<template>
  <button v-on:click="handleClick(choice)">
    [{{ choice.type }}] {{ choice.text }}
  </button>
</template>
<script>
export default {
  name: "ChoiceButton",
  props: {
    choice: Object,
  },
  emits: [
      "continue",
      "exit"
  ],
  methods: {
    handleClick(choice) {
      switch (choice.type) {
        case "continue":
          this.$emit("continue", choice.next);
          break;
        case "exit":
          this.$emit("exit");
          break;
        default:
          console.log("Invalid choice type");
      }
    },
  },
};
</script>