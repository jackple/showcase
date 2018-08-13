const cp = require('child_process');
const semver = require('semver');

function exec(command) {
    return new Promise((resolve, reject) => {
        cp.exec(command, {}, function(err, stdout, stderr) {
            if (err) {
                reject(err);
            }
            if (stderr) {
                reject(stderr);
            }
            resolve(stdout);
        });
    });
}

const tagLatest = 'latest';
const tagBeta = 'beta';

// main
(async () => {
    // versionType请参考https://docs.npmjs.com/misc/semver#functions
    const versionType = process.argv[2];
    console.log(versionType);
    if (!versionType) {
        throw new Error('参数错误!');
    }
    const tag = process.argv[3] || 'beta';
    try {
        const versionStr = await exec(
            'npm view cloud-platform-base dist-tags --json',
        );
        const version = JSON.parse(versionStr);
        if (tag === tagLatest) {
            // latest tag 一切按照原标准执行
            await exec(`npm version ${versionType}`);
            return;
        } else {
            const newVersion = semver.inc(version.beta, versionType, tagBeta);
            await exec(`npm version ${newVersion}`);
        }
    } catch (err) {
        throw new Error(err);
    }
})();
