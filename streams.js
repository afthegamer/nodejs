const fs = require('fs');

const readStream = fs.createReadStream("./docs/file1.txt", { encoding: 'utf8' });
const writeStream = fs.createWriteStream("./docs/file2.txt", { encoding: 'utf8' });

// readStream.on('data', chunk => {
//     writeStream.write(chunk, err => { console.log("data written") })
// }
// );

readStream.pipe(writeStream);
