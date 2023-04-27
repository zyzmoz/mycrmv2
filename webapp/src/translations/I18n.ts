import { babelTower } from "./babelTower";
import { Dictionary } from "./types";

export let i18n: Dictionary;

export const configure = (lang: string) => {
  i18n = babelTower[lang]
}

export default {
  configure,
}