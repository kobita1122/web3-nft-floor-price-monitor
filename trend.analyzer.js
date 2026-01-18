export function analyzeTrend(collection) {
  const status = collection.floorPrice > 1.5 ? "Bullish" : "Neutral";

  return {
    name: collection.name,
    trend: status
  };
}
