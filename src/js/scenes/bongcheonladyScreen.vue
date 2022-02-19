<script>
import NameTagButton from "./bongcheonlady/nameTagButton.vue";
import NameTagMain from "./bongcheonlady/nameTagMain.vue";
import PhoneBookButton from "./bongcheonlady/phoneBookButton.vue";
import PhoneBookMain from "./bongcheonlady/phoneBookMain.vue";
import { BongcheonladyState } from "./bongcheonlady/common";

export default {
  name: "BongcheonladyStreet",
  components: {
    NameTagButton,
    NameTagMain,
    PhoneBookButton,
    PhoneBookMain,
  },
  created() {
    this.BongcheonladyState = BongcheonladyState;
  },
  data() {
    return {
      state: BongcheonladyState.Idle, 
    };
  },
  methods: {
    onClick(state) {
      this.state = state;
    }
  },
};
</script>

<template>
  <NameTagButton v-if="state === BongcheonladyState.Idle"
    @click="onClick(BongcheonladyState.NameTag)"
  />
  <PhoneBookButton v-if="state === BongcheonladyState.Idle"
    @click="onClick(BongcheonladyState.PhoneBook)"
  />

  <div id="cancel-button" v-if="state !== BongcheonladyState.Idle"
    class="absolute w-full h-full top-0"
    @click="onClick(BongcheonladyState.Idle)"
  ></div>

  <NameTagMain v-if="state === BongcheonladyState.NameTag" />
  <PhoneBookMain v-if="state === BongcheonladyState.PhoneBook" />
</template>
