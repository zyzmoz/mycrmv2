import { Dictionary } from './types';
import ptBR from './pt-BR.json';
import enUS from './en-US.json';

type BabelTower = {
  [key: string]: Dictionary
}

export const babelTower: BabelTower = {
  'pt-BR': ptBR, 
  'en-US': enUS 
}