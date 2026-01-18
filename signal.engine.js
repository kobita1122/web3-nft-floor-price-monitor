export function detectSignal(collection) {
  return collection.volume24h > 100 ? "High Activity" : "Normal Activity";
}
