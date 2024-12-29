const fs = require('fs').promises;
const path = require('path');

function walkOnFiles(fileNames, rootDir){
    fileNames.forEach(async (fileName) => {
        const fileFullPath = path.resolve(rootDir, fileName);
        const stats = await fs.stat(fileFullPath);

        if (/\.js$/.test(fileName)){
            console.log(fileName);
            if(stats.isDirectory()) readdir(fileFullPath);
        }

    });
}

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walkOnFiles(files, rootDir);
}

readdir(path.resolve(__dirname, '..', 'Aula1_Modulos'));
// readdir();