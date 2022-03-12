export const SceneNames = {
  PrologScreen: 'PrologScreen',
  MainStreet: "MainStreet",
  BaekgolStreet: "BaekgolStreet",
  BongcheonladyStreet: "BongcheonladyStreet",
  BomiStreet: "BomiStreet",
  InfoPage: "InfoPage",
  CriticPage: "CriticPage",
};

export const BackgroundCSS = {
  [SceneNames.PrologScreen]: "img-main-street",
  [SceneNames.MainStreet]: "img-main-street",
  [SceneNames.BaekgolStreet]: "img-backgol-street",
  [SceneNames.BongcheonladyStreet]: "img-bongcheonlady-street",
  [SceneNames.BomiStreet]: "img-bomi-street",
  [SceneNames.InfoPage]: "img-info-page",
  [SceneNames.CriticPage]: "img-main-street",
};

export const MainStreetCSS = BackgroundCSS[SceneNames.MainStreet];
