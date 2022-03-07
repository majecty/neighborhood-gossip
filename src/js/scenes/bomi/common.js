export const BomiState = {
  Idle: "Idle",
  PawPrint: "PawPrint",
  BomiSpotted: "BomiSpotted",
  BomiLog: "BomiLog",
  BomiLogText: "BomiLogText",
};

export function parseBomiState(state) {
  switch (state) {
    case "Idle":
      return BomiState.Idle;
    case "PawPrint":
      return BomiState.PawPrint;
    case "BomiSpotted":
      return BomiState.BomiSpotted;
    case "BomiLog":
      return BomiState.BomiLog;
    case "BomiLogText":
      return BomiState.BomiLogText;
    default:
      throw new Error(`Unknown BomiState: ${state}`);
  }
}
