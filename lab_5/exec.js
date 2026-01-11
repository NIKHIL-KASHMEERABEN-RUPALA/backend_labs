const child_p = require('child_process');

child_p.exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.error(`The following error occurred in the command : ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`The following stderr occurred in the command : ${stderr}`);
        return;
    }

    console.log(`The following stdout is from the command : ${stdout}`);
});
