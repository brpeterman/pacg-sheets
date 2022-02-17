import { render, unmountComponentAtNode } from "react-dom";
import { Abilities } from "../../components/abilities";
import { AbilityType, Ability, Die, SkillType } from "../../model/characters";

let container: Element | undefined;

describe("render abilities", () => {
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container!);
    container?.remove();
    container = undefined;
  });

  const baseAbilities: Ability[] = [
    {
      abilityType: AbilityType.Strength,
      die: Die.D10,
      proficiencies: {
        [SkillType.Melee]: 1,
      },
      upgrades: {
        str: { modifier: 1 },
      },
    },
    {
      abilityType: AbilityType.Dexterity,
      die: Die.D6,
      proficiencies: {},
      upgrades: {},
    },
    {
      abilityType: AbilityType.Constitution,
      die: Die.D6,
      proficiencies: {},
      upgrades: {},
    },
    {
      abilityType: AbilityType.Intelligence,
      die: Die.D6,
      proficiencies: {},
      upgrades: {},
    },
    {
      abilityType: AbilityType.Wisdom,
      die: Die.D6,
      proficiencies: {},
      upgrades: {},
    },
    {
      abilityType: AbilityType.Charisma,
      die: Die.D6,
      proficiencies: {},
      upgrades: {},
    },
  ];

  test("render abilities with correct base values", () => {
    render(
      <Abilities
        baseAbilities={baseAbilities}
        purchasedUpgrades={[]}
        collapsed={false}
        heroPoints={0}
        toggleCollapseHandler={() => {}}
        abilityUpgradeHandler={() => {}}
      />,
      container!
    );
    const strengthRow = document.querySelector(".abilities-row-Strength");
    const primaryModifier = strengthRow?.querySelector(
      ".ability-primary-modifier"
    )?.textContent;
    expect(primaryModifier).toEqual("+0");

    const die = strengthRow?.querySelector(".ability-primary-die")?.textContent;
    expect(die).toEqual("D10");

    const secondaryRow = strengthRow?.querySelector(".ability-secondary-row");
    const secondaryTitle = secondaryRow?.querySelector(
      ".ability-secondary-title"
    )?.textContent;
    expect(secondaryTitle).toEqual("Melee");

    const secondaryModifier = secondaryRow?.querySelector(
      ".ability-secondary-modifier"
    )?.textContent;
    expect(secondaryModifier).toEqual("+1");
  });

  test("render abilities with correct upgraded values", () => {
    render(
      <Abilities
        baseAbilities={baseAbilities}
        purchasedUpgrades={["str"]}
        collapsed={false}
        heroPoints={0}
        toggleCollapseHandler={() => {}}
        abilityUpgradeHandler={() => {}}
      />,
      container!
    );
    const strengthRow = document.querySelector(".abilities-row-Strength");
    const primaryModifier = strengthRow?.querySelector(
      ".ability-primary-modifier"
    )?.textContent;
    expect(primaryModifier).toEqual("+1");

    const secondaryModifier = strengthRow?.querySelector(
      ".ability-secondary-modifier"
    )?.textContent;
    expect(secondaryModifier).toEqual("+2");
  });
});
