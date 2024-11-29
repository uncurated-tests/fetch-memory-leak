const https = require('https');

function request(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const { statusCode: status } = res;
      if (status !== 200) {
        res.resume();
        reject(new Error(`Request failed with status ${status}`));
        return;
      }
      let chunks = [];
      res.on('data', (chunk) => { chunks.push(chunk); });
      res.on('end', () => resolve({ status, buffer: Buffer.concat(chunks) }));
    }).on('error', (e) => {
      reject(e);
    });
  });
}
async function main() {
  for (var i = 0; i <= 3500; i++) {
    const res = await request(`https://placehold.co/1000/png?text=${i}`);
    if (i % 50 === 0 && res.status && res.buffer) {
      console.log(
        i.toString().padStart(4, '0') + ' ' +
        process.memoryUsage().rss.toString().padStart(9, '0') + ' ' +
        process.memoryUsage().heapUsed.toString().padStart(9, '0') + ' ' +
        process.memoryUsage().heapTotal.toString().padStart(9, '0')
      );
    }
  }
}
main().catch(console.error);