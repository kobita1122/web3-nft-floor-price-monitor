export const HISTORY = [];

export function logCollection(snapshot) {
  HISTORY.push({ time: Date.now(), snapshot });
}
