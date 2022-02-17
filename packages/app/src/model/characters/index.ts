import { Valeros } from "./valeros";
import { Character } from "./character";
import { Kyra } from "./kyra";
import { Lini } from "./lini";
import { Merisiel } from "./merisiel";
import { Amiri } from "./amiri";

export * from "./character";

export const Characters: { [key: string]: Character } = {
  [Valeros.name]: Valeros,
  [Kyra.name]: Kyra,
  [Lini.name]: Lini,
  [Merisiel.name]: Merisiel,
  [Amiri.name]: Amiri,
};
