export const SceneNames = {
  PrologScreen: 'PrologScreen',
  MainStreet: "MainStreet",
  BaekgolStreet: "BaekgolStreet",
  BongcheonladyStreet: "BongcheonladyStreet",
  BomiStreet: "BomiStreet",
  InfoPage: "InfoPage"
};

export const BackgroundCSS = {
  [SceneNames.PrologScreen]: "img-main-street",
  [SceneNames.MainStreet]: "img-main-street",
  [SceneNames.BaekgolStreet]: "img-backgol-street",
  [SceneNames.BongcheonladyStreet]: "img-bongcheonlady-street",
  [SceneNames.BomiStreet]: "img-bomi-street",
  [SceneNames.InfoPage]: "img-info-page"
};

export const MainStreetCSS = BackgroundCSS[SceneNames.MainStreet];
