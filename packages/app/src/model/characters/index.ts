import { Valeros } from "./valeros";
import { Character } from "./character";
import { Kyra } from "./kyra";
import { Lini } from "./lini";
import { Merisiel } from "./merisiel";
import { Amiri } from "./amiri";
import { Ezren } from "./ezren";
import { Fumbus } from "./fumbus";

export * from "./character";

export const Characters: { [key: string]: Character } = {
  [Valeros.name]: Valeros,
  [Kyra.name]: Kyra,
  [Lini.name]: Lini,
  [Merisiel.name]: Merisiel,
  [Amiri.name]: Amiri,
  [Ezren.name]: Ezren,
  [Fumbus.name]: Fumbus,
};
