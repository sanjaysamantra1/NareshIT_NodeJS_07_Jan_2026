const fs = require('fs');

let fileArr = fs.readdirSync('../../angular_project_2', { withFileTypes: true });
for (const fileName of fileArr) {
    if (!fileName.isDirectory()) {
        console.log(`📄 ${fileName.name}`);
    } else {
        console.log(`📂 ${fileName.name}`)
    }
}