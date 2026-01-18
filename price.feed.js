export function simulateFloorPrice(collection) {
  console.log("Simulating floor price update...");

  const change = (Math.random() - 0.5) * 0.2;
  collection.floorPrice = Number((collection.floorPrice + change).toFixed(2));

  return collection;
}
