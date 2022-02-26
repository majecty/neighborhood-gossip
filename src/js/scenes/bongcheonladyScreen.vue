<script>
import NameTagButton from "./bongcheonlady/nameTagButton.vue";
import NameTagMain from "./bongcheonlady/nameTagMain.vue";
import PhoneBookButton from "./bongcheonlady/phoneBookButton.vue";
import PhoneBookMain from "./bongcheonlady/phoneBookMain.vue";
import PhoneBookPhoto from "./bongcheonlady/phoneBookPhoto.vue";
import HandPrintsButton from "./bongcheonlady/handPrintsButton.vue";
import HandPrintsMain from "./bongcheonlady/handPrintsMain.vue";
import BackButton from "./common/backButton.vue";
import { BongcheonladyState } from "./bongcheonlady/common";

export default {
  name: "BongcheonladyStreet",
  emits: ["back"],
  components: {
    NameTagButton,
    NameTagMain,
    PhoneBookButton,
    PhoneBookMain,
    PhoneBookPhoto,
    HandPrintsButton,
    HandPrintsMain,
    BackButton,
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
    },
    back() {
      switch (this.state) {
        case BongcheonladyState.NameTag:
          this.state = BongcheonladyState.Idle;
          break;
        case BongcheonladyState.PhoneBook:
          this.state = BongcheonladyState.Idle;
          break;
        case BongcheonladyState.PhoneBookPhoto:
          this.state = BongcheonladyState.PhoneBook;
          break;
        case BongcheonladyState.HandPrints:
          this.state = BongcheonladyState.Idle;
          break;
        default:
          this.$emit("back");
          break;
      }
    },
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
  <HandPrintsButton v-if="state === BongcheonladyState.Idle"
    @click="onClick(BongcheonladyState.HandPrints)"
  />

  <NameTagMain v-if="state === BongcheonladyState.NameTag" />
  <PhoneBookMain v-if="state === BongcheonladyState.PhoneBook"
    @click="onClick(BongcheonladyState.PhoneBookPhoto) "/>
  <PhoneBookPhoto v-if="state === BongcheonladyState.PhoneBookPhoto"
    @click="onClick(BongcheonladyState.PhoneBook)" />
  <HandPrintsMain v-if="state === BongcheonladyState.HandPrints" />

  <BackButton @back="back"/>
</template>
