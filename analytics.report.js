export function generateReport(collection, trend) {
  console.log("----- NFT Floor Report -----");
  console.log("Collection:", collection.name);
  console.log("Floor Price:", collection.floorPrice, "ETH");
  console.log("24h Volume:", collection.volume24h);
  console.log("Trend:", trend.trend);
  console.log("-----------------------------");
}
