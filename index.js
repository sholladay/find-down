'use strict';

const path = require('path');
const pathExists = require('path-exists');
const nextPath = require('next-path');

const findDown = async (filename, option) => {
    const config = option || {};
    const end = path.resolve(config.cwd || '');
    let dir = path.parse(end).root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const fp = path.join(dir, filename);
        if (await pathExists(fp)) {
            return fp;
        }
        else if (dir === end) {
            return null;
        }
        dir = nextPath(dir, end);
    }
};

module.exports = findDown;
