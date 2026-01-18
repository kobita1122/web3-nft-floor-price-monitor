import { connectRPC } from "./rpc.client.js";
import { loadCollections } from "./collection.registry.js";
import { simulateFloorPrice } from "./price.feed.js";
import { analyzeTrend } from "./trend.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 NFT Floor Price Monitor");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const collections = loadCollections();

const updated = simulateFloorPrice(collections[0]);
const trend = analyzeTrend(updated);

generateReport(updated, trend);
