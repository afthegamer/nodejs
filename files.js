const fs = require("fs");

// const readFile = () => fs.readFile("./docs/file1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// });

// readFile();
// fs.writeFile("./docs/file1.txt", "Text replaced", () => {
//     console.log("Content replaced");
// });
const directory = "./newDir";

// if (!fs.existsSync(directory)) {
//     fs.mkdir(directory, (err) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("New directory created");
//         }
//     });
// }
// else {
//     fs.rmdir(directory, () => { console.log("Directory deleted") });
// }

// fs.writeFile("./docs/file1.txt", "Text replaced", () => {
//     console.log("Content replaced");
// });

fs.unlink("./docs/file1.txt", err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File deleted");
    }
})
