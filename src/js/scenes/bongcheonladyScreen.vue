<script>
import NameTagButton from "./bongcheonlady/nameTagButton.vue";
import NameTagMain from "./bongcheonlady/nameTagMain.vue";
import PhoneBookButton from "./bongcheonlady/phoneBookButton.vue";
import PhoneBookMain from "./bongcheonlady/phoneBookMain.vue";
import PhoneBookPhoto from "./bongcheonlady/phoneBookPhoto.vue";
import PhoneBookPhoto2 from "./bongcheonlady/phoneBookPhoto2.vue";
import HandPrintsButton from "./bongcheonlady/handPrintsButton.vue";
import HandPrintsMain from "./bongcheonlady/handPrintsMain.vue";
import BabymealTinButton from "./bongcheonlady/babymealTinButton.vue";
import BabymealTinMain from "./bongcheonlady/babymealTinMain.vue";
import BabymealTinInner from "./bongcheonlady/babymealTinInner.vue";
import BabymealTininner2 from "./bongcheonlady/babymealTinInner2.vue";
import BackButton from "./common/backButton.vue";
import { BongcheonladyState } from "./bongcheonlady/common";
import { sound } from "../sound";
import { urlQuery } from "../data/urlQuery";

export default {
  name: "BongcheonladyStreet",
  emits: ["back"],
  components: {
    NameTagButton,
    NameTagMain,
    PhoneBookButton,
    PhoneBookMain,
    PhoneBookPhoto,
    PhoneBookPhoto2,
    HandPrintsButton,
    HandPrintsMain,
    BabymealTinButton,
    BabymealTinMain,
    BabymealTinInner,
    BabymealTininner2,
    BackButton,
  },
  created() {
    this.BongcheonladyState = BongcheonladyState;
    this.mounted = false;
  },
  data() {
    return {
      state: BongcheonladyState.Idle, 
      urlQuery,
    };
  },
  mounted() {
    if (this.urlQuery.bongcheonState != null) {
      this.state = this.urlQuery.bongcheonState;
    }
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
    next() {
      switch (this.state) {
        case BongcheonladyState.BabymealTin:
          this.state = BongcheonladyState.BabymealTinInner;
          break;
        case BongcheonladyState.PhoneBook:
          this.state = BongcheonladyState.PhoneBookPhoto;
          break;
        case BongcheonladyState.PhoneBookPhoto:
          this.state = BongcheonladyState.PhoneBookPhoto2;
          break;
        case BongcheonladyState.BabymealTinInner:
          this.state = BongcheonladyState.BabymealTinInner2;
          break;
      }
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
        case BongcheonladyState.PhoneBookPhoto2:
          this.state = BongcheonladyState.PhoneBookPhoto;
          break;
        case BongcheonladyState.HandPrints:
          this.state = BongcheonladyState.Idle;
          break;
        case BongcheonladyState.BabymealTin:
          this.state = BongcheonladyState.Idle;
          break;
        case BongcheonladyState.BabymealTinInner:
          this.state = BongcheonladyState.BabymealTin;
          break;
        case BongcheonladyState.BabymealTininner2:
          this.state = BongcheonladyState.BabymealTinInner;
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
    @next="next"/>
  <PhoneBookPhoto v-if="state === BongcheonladyState.PhoneBookPhoto"
    @back="back"
    @next="next"
    />
  <PhoneBookPhoto2 v-if="state === BongcheonladyState.PhoneBookPhoto2"
    @back="back"
  />
  <HandPrintsMain v-if="state === BongcheonladyState.HandPrints" />
  <BabymealTinMain v-if="state === BongcheonladyState.BabymealTin" @next="next" />
  <BabymealTinInner v-if="state === BongcheonladyState.BabymealTinInner" @back="back" @next="next" />
  <BabymealTininner2 v-if="state === BongcheonladyState.babymealTininner2" @back="back" />

  <BackButton @back="back"/>
</template>
