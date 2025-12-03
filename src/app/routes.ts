// export enum Routes {
//   intro = "/intro",
//   accueil = "/accueil",
//   pinball = "/pinball-word", // <- correspond à ton GameContainer
//   pinballIgnition = "/pinball/ignition",
//   pinballSteelWheel = "/pinball/Steel-Wheel",
//   pinballBeatBox = "/pinball/Beat-Box",
//   pinballNightmare = "/pinball/Nightmare",
//   introuvable = "/introuvable",
// }

export enum Routes {
  intro = "/intro",
  accueil = "/accueil",
  pinball = "/pinball/:name",
  hiScore = "/hiScore",
  introuvable = "/introuvable",
}
