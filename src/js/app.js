import screenInner from "./screenInner";

document.addEventListener("alpine:init", () => {
  console.log("in alpine:init");
  Alpine.data("screenInner", screenInner);
});
