<script>
import NameTagButton from "./bongcheonlady/nameTagButton.vue";
import NameTagMain from "./bongcheonlady/nameTagMain.vue";
import PhoneBookButton from "./bongcheonlady/phoneBookButton.vue";
import PhoneBookMain from "./bongcheonlady/phoneBookMain.vue";
import PhoneBookPhoto from "./bongcheonlady/phoneBookPhoto.vue";
import HandPrintsButton from "./bongcheonlady/handPrintsButton.vue";
import HandPrintsMain from "./bongcheonlady/handPrintsMain.vue";
import BabymealTinButton from "./bongcheonlady/babymealTinButton.vue";
import BabymealTinMain from "./bongcheonlady/babymealTinMain.vue";
import BackButton from "./common/backButton.vue";
import { BongcheonladyState } from "./bongcheonlady/common";
import { sound } from "../sound";

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
    BabymealTinButton,
    BabymealTinMain,
    BackButton,
  },
  created() {
    this.BongcheonladyState = BongcheonladyState;
    this.mounted = false;
  },
  data() {
    return {
      state: BongcheonladyState.Idle, 
    };
  },
  mounted() {
    sound.play("koongkoong2");
    setTimeout(() => {
      if (this.mounted) {
        sound.play("lady");
      }
    }, 3000);
    this.mounted = true;
  },
  unmounted() {
    sound.stop("koongkoong2");
    sound.stop("lady");
    this.mounted = false;
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
        case BongcheonladyState.BabymealTin:
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
  <BabymealTinButton v-if="state === BongcheonladyState.Idle"
    @click="onClick(BongcheonladyState.BabymealTin)"
  />

  <NameTagMain v-if="state === BongcheonladyState.NameTag" />
  <PhoneBookMain v-if="state === BongcheonladyState.PhoneBook"
    @click="onClick(BongcheonladyState.PhoneBookPhoto) "/>
  <PhoneBookPhoto v-if="state === BongcheonladyState.PhoneBookPhoto"
    @click="onClick(BongcheonladyState.PhoneBook)" />
  <HandPrintsMain v-if="state === BongcheonladyState.HandPrints" />
  <BabymealTinMain v-if="state === BongcheonladyState.BabymealTin" />

  <BackButton @back="back"/>
</template>
