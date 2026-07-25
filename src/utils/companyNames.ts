import type { Career } from "../data/careers";

const companyDisplayNames: Record<string, string> = {
  cognex: "Cognex (SUALAB)",
  artifriends: "ArtiFriends",
  fusiondata: "FusionData",
  "handy-his": "HandyHIS",
  "standard-chartered": "Standard Chartered Bank Korea",
  finger: "FINGER Inc.",
};

const companyNameReplacements: Array<[string, string]> = [
  ["코그넥스(구 수아랩)", "Cognex (SUALAB)"],
  ["한국스탠다드차타드은행", "Standard Chartered Bank Korea"],
  ["스탠다드차타드은행", "Standard Chartered Bank Korea"],
  ["핸디에이치아이에스", "HandyHIS"],
  ["퓨전데이타", "FusionData"],
  ["아티프렌즈", "ArtiFriends"],
  ["코그넥스", "Cognex"],
  ["수아랩", "SUALAB"],
  ["핑거", "FINGER Inc."],
];

export const getCompanyDisplayName = (
  career: Pick<Career, "id" | "company">,
) => companyDisplayNames[career.id] ?? career.company;

export const normalizeCompanyNames = (value: string) =>
  companyNameReplacements.reduce(
    (normalized, [source, replacement]) =>
      normalized.replaceAll(source, replacement),
    value,
  );
