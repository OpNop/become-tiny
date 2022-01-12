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
      story: [
        {
          label: "start",
          text: "212435! 212436! 212437! Ohh hey Commander! You caught me doin’ my usual jumping, Whats up?",
          choices: [
            {
              type: "continue",
              text: "What in Tyria is this… TINY, everyone is talking about?",
              next: "about_tiny",
            },
            {
              type: "continue",
              text: "I want to join [TINY]! Where do I sign?",
              next: "start_joining",
            },
            {
              type: "exit",
              text: "I’ll let you get back to your jumping.",
            },
          ],
        },
        {
          label: "about_tiny",
          text: "Ahh, I see our scouts have found us another, worthy of the [TINY] tag. We are everywhere in Tyria and always stalking Asura looking for new members.",
          choices: [
            {
              type: "continue",
              text: "I’ll take that as a compliment, I guess, but go on.",
              next: "about_tiny_2",
            },
            {
              type: "exit",
              text: "Ohh, I don’t know if I’m ready for commitment.",
            },
          ],
        },
        {
          label: "start_joining",
          text: "Love the enthusiasm Commander! But… first, there is some fine print I need you to look over. Nothing to worry about, unless you are a Sylvari in disguise.",
          choices: [
            {
              type: "continue",
              text: "Ohh boy! I love fine print!",
              next: "joining_2",
            },
            {
              type: "exit",
              text: "Rules and regulations? What is this, a guild run by Asura? I’ll see myself out.",
            },
          ],
        },
        {
          label: "joining_2",
          text: "Ok, First and most important, TINY is an all-Asura guild. So that means if you decide to show off your membership, you’d best be on your Asura character.",
          choices: [
            {
              type: "continue",
              text: "Got it; if I rep, I will only do it on my Asura.",
              next: "joining_3",
            },
          ],
        },
        {
          label: "joining_3",
          text: "Next, be nice to everyone, even to Bookahs. We are here to have fun and enjoy being Asuras!",
          choices: [
            {
              type: "continue",
              text: "That seems reasonable, whats next?",
              next: "joining_4",
            },
          ],
        },
        {
          label: "joining_4",
          text: "Now, for a touchy topic, politics and religion. I could go on for hours about Councillor Phlunt or The Eternal Alchemy, but those topics are best not discussed in any TINY communication channels.",
          choices: [
            {
              type: "continue",
              text: "Fine, I wont talk about how horrible Phlunt is.",
              next: "joining_5",
            },
          ],
        },
        {
          label: "joining_5",
          text: "Last one, I swear! Get it? Because this rule is about swea…oh nevermind. Anyway, I might be a genius progeny, but I am still a progeny and so are other TINY members, so please refrain from swearing; you’re better than that Commander.",
          choices: [
            {
              type: "continue",
              text: "Nice and simple. I think I can follow these rules.",
              next: "joining_6",
            },
            {
              type: "exit",
              text: "This seems way too hard for me to follow.",
            },
          ],
        },
      ],
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