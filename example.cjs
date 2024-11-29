const { fetch } = require('undici');
async function getPhoto(i) {
  const res = await fetch(`https://placehold.co/1000/png?text=${i}`);
  const status = res.status;;
  const buffer = await res.arrayBuffer();
  return { status, buffer };
}
async function main() {
  for (var i = 0; i <= 5000; i++) {
    const res = await getPhoto(i);
    if (i % 50 === 0 && res.status && res.buffer) {
      console.log(
        i.toString().padStart(4, '0') + ' ' +
        process.memoryUsage().rss.toString().padStart(9, '0')  + ' ' +
        process.memoryUsage().heapUsed.toString().padStart(9, '0')  + ' ' +
        process.memoryUsage().heapTotal.toString().padStart(9, '0')
      );
    }
  }
}
main().catch(console.error);