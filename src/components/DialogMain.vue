<template>
  <div id="dialogMain">
    <div id="dialogMessage">{{ storyStep.text }}</div>
    <dialog-choices
      :choices="storyStep.choices"
      @continue="goto"
      @exit="goto('start')"
    />
  </div>
</template>

<script>
import DialogChoices from "./DialogChoices.vue";
import Story from "../data/story.json";
export default {
  name: "DialogMain",
  components: {
    DialogChoices,
  },
  mounted() {
    this.storyStep = this.find_label("start");
  },
  methods: {
    find_label(label) {
      return this.story.find((step) => step.label == label);
    },
    goto(label) {
      console.log(`Moving on to ${label}`);
      this.storyStep = this.find_label(label);
    },
  },
  data() {
    return {
      storyStep: {},
      story: Story,
    };
  },
};
</script>
<style lang="scss">
#dialogMain {
  background-image: url("../assets/images/TaimiDialog.png");
  height: 512px;
  left: calc(50% - 512px);
  position: absolute;
  top: 0;
  width: 1024px;
}
#dialogMessage {
  font-size: 12pt;
  // height: 75px;
  height: 110px;
  left: 185px;
  position: relative;
  top: 110px;
  width: 470px;
}
</style>