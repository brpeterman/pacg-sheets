import {
  Character,
  CardType,
  AbilityType,
  SkillType,
  Die,
  ProficiencyType,
  Role,
} from "./character";

const Compatriot: Role = {
  name: "Compatriot",
  description: `"Sword and board" often leads to "room and board."`,
  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
  },
  proficiencyUpgrades: {},
  classPowerOverrides: {
    "power-1": {
      description: `On a local combat ({diplomacy}or your Diplomacy) check,
      you may reload or recharge a weapon or an armor ({ally}or an ally) to add 1d4 ({1d6}1d6) ({1d8}1d8).`,
      upgrades: ["diplomacy", "ally", "1d6", "1d8"],
    },
    "power-2": {
      description: `At the end of your turn, you may recharge
      a weapon or an armor ({ally}or an ally) from your hand or discards.`,
      upgrades: ["ally"],
    },
  },
  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you would recharge or discard a Shield armor for its power, you 
      may reveal it instead. ({reduction}When a local character suffers damage, you 
      may recharge a Shield armor to reduce it by 2.)`,
      upgrades: ["unlock", "reduction"],
    },
    "role-power-2": {
      description: `{unlock}When another local character would acquire an ally, you may acquire it 
      instead. ({draw}When a local character fails to acquire an ally, you may bury a 
      card to draw it.)`,
      upgrades: ["unlock", "draw"],
    },
  },
};

const DrunkenAvenger: Role = {
  name: "Drunken Avenger",
  description: `A good tavern always has cheap alcohol, friendly staff, and easily 
  replaced furniture`,
  handUpgrades: {
    "role-hand-1": {
      modifier: 1,
    },
  },
  proficiencyUpgrades: {},
  classPowerOverrides: {
    "power-1": {
      description: `On a local combat ({diplomacy}or your Diplomacy) ({strength} or your Strength or Constitution) check,
      you may reload or recharge a weapon or an armor ({liquid}or a Liquid boon) to add 1d4 ({1d6}1d6).`,
      upgrades: ["diplomacy", "strength", "liquid", "1d6"],
    },
    "power-2": {
      description: `At the end of your turn, you may recharge
      a weapon or an armor ({liquid}or a Liquid boon) from your hand or discards.`,
      upgrades: ["liquid"],
    },
    "power-3": {
      description: `You may avenge by discarding ({recharge}or recharging) ({reveal}or revealing) a card. 
      ({reduction}You may do the same to reduce damage you suffer during that encounter 
      by 3.)`,
      upgrades: ["recharge", "reveal", "reduction"],
    },
  },
  rolePowers: {
    "role-power-1": {
      description: `{unlock}When you move during your move step, you may move to a random other 
      location; if you do, heal a card, then draw a card.`,
      upgrades: ["unlock"],
    },
    "role-power-2": {
      description: `{unlock}You are proficient with Liquids. On your checks to acquire or recharge 
      Liquid boons, add 1d12.`,
      upgrades: ["unlock"],
    },
  },
};

export const Valeros: Character = {
  name: "Valeros",
  class: "Fighter",
  race: "Human",
  description: `The mercenary life comes with many gray conflicts, so 
    Valeros abandoned his company to help those in need. 
    His sword and shield are always at the ready, though 
    one hand might be holding a full tankard dedicated 
    to the drunkard god Cayden Cailean. It won't be full 
    for long.`,
  favoredCards: [CardType.Weapon],

  roles: [Compatriot, DrunkenAvenger],

  hand: {
    count: 4,
    upgrades: {
      "class-hand": {
        modifier: 1,
      },
    },
  },

  deck: {
    [CardType.Weapon]: {
      count: 4,
      upgrades: {
        "weapon-1": {
          modifier: 1,
        },
        "weapon-2": {
          modifier: 1,
        },
        "weapon-3": {
          modifier: 1,
        },
      },
    },
    [CardType.Spell]: {
      count: 0,
      upgrades: {},
    },
    [CardType.Armor]: {
      count: 3,
      upgrades: {
        "armor-1": {
          modifier: 1,
        },
        "armor-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Item]: {
      count: 2,
      upgrades: {
        "item-1": {
          modifier: 1,
        },
        "item-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Ally]: {
      count: 3,
      upgrades: {
        "ally-1": {
          modifier: 1,
        },
        "ally-2": {
          modifier: 1,
        },
      },
    },
    [CardType.Blessing]: {
      count: 3,
      upgrades: {
        "blessing-1": {
          modifier: 1,
        },
      },
    },
  },

  abilities: [
    {
      abilityType: AbilityType.Strength,
      die: Die.D10,
      proficiencies: { [SkillType.Melee]: 2 },
      upgrades: {
        "str-1": {
          modifier: 1,
        },
        "str-2": {
          modifier: 1,
        },
        "str-3": {
          modifier: 1,
        },
        "str-4": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D8,
      proficiencies: { [SkillType.Ranged]: 1 },
      upgrades: {
        "dex-1": {
          modifier: 1,
        },
        "dex-2": {
          modifier: 1,
        },
        "dex-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D8,
      proficiencies: { [SkillType.Fortitude]: 2 },
      upgrades: {
        "con-1": {
          modifier: 1,
        },
        "con-2": {
          modifier: 1,
        },
        "con-3": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D4,
      proficiencies: {},
      upgrades: {
        "int-1": {
          modifier: 1,
        },
        "int-2": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D6,
      proficiencies: {},
      upgrades: {
        "wis-1": {
          modifier: 1,
        },
      },
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D6,
      proficiencies: { [SkillType.Diplomacy]: 2 },
      upgrades: {
        "cha-1": {
          modifier: 1,
        },
        "cha-2": {
          modifier: 1,
        },
      },
    },
  ],

  proficiencies: {
    proficiencies: [ProficiencyType.Armor, ProficiencyType.Weapon],
    upgrades: {},
  },

  powers: {
    "power-1": {
      description: `On a local combat ({diplomacy}or your Diplomacy) check,
        you may reload or recharge a weapon or an armor to add 1d4 ({1d6}1d6).`,
      upgrades: ["diplomacy", "1d6"],
    },
    "power-2": {
      description: `At the end of your turn, you may recharge
        a weapon or an armor from your hand or discards.`,
    },
    "power-3": {
      description: `You may avenge by discarding ({recharge}or recharging) a card.`,
      upgrades: ["recharge"],
    },
  },
};
