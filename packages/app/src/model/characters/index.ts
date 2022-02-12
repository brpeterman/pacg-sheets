import { Valeros } from "./valeros";
import { Character } from "./character";
import { Kyra } from "./kyra";

export * from "./character";

export const Characters: { [key: string]: Character } = {
  [Valeros.name]: Valeros,
  [Kyra.name]: Kyra,
};
