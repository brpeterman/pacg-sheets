import { Valeros } from "./valeros";
import { Character } from "./character";
import { Kyra } from "./kyra";
import { Lini } from "./lini";
import { Merisiel } from "./merisiel";
import { Amiri } from "./amiri";
import { Ezren } from "./ezren";
import { Fumbus } from "./fumbus";
import { Harsk } from "./harsk";
import { Lem } from "./lem";
import { Sajan } from "./sajan";
import { Seelah } from "./seelah";
import { Seoni } from "./seoni";

export * from "./character";

export const Characters: { [key: string]: Character } = {
  [Amiri.name]: Amiri,
  [Ezren.name]: Ezren,
  [Fumbus.name]: Fumbus,
  [Harsk.name]: Harsk,
  [Kyra.name]: Kyra,
  [Lem.name]: Lem,
  [Lini.name]: Lini,
  [Merisiel.name]: Merisiel,
  [Sajan.name]: Sajan,
  [Seelah.name]: Seelah,
  [Seoni.name]: Seoni,
  [Valeros.name]: Valeros,
};
