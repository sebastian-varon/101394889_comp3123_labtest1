const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'Logs');

function makeLogs() {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log('Logs folder made.');
    }

    process.chdir(folderPath);

    for (let i = 0; i < 10; i++) {
        const logFile = `log${i}.txt`;
        fs.writeFileSync(logFile, `This is Log #${i}`);
        console.log(logFile);
    }
}

function deleteLogs() {
    if (fs.existsSync(folderPath)) {
        const logFiles = fs.readdirSync(folderPath);

        logFiles.forEach(file => {
            fs.unlinkSync(path.join(folderPath, file));
            console.log(`Deleted: ${file}`);
        });

        process.chdir(__dirname);

        fs.rmdirSync(folderPath);
        console.log('Logs folder deleted.');
    } else {
        console.log('Logs folder doesn’t exist.');
    }
}

function manageLogs() {
    console.log('Making logs...');

    makeLogs();

    setTimeout(() => {
        console.log('\nDeleting logs...');
        deleteLogs();
    }, 2000);
}

manageLogs();