const { parentPort } = require("node:worker_threads");

// parentPort.onmessage = function (msg) {
console.log("worker thread started working...");
let total = 0;
for (let i = 0; i < 10000000000; i++) {
  total += i;
}
//   console.log("🚀 ~ total:", total);
parentPort.postMessage(total);
// };
