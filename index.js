'use strict';

const path = require('path');
const locatePath = require('locate-path');
const nextPath = require('next-path');

const findDown = async (filename, option) => {
    const config = option || {};
    const end = path.resolve(config.cwd || '');
    const filenames = [].concat(filename);
    let dir = path.parse(end).root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        // eslint-disable-next-line no-await-in-loop
        const file = await locatePath(filenames, { cwd : dir });
        if (file) {
            return path.join(dir, file);
        }
        else if (dir === end) {
            return null;
        }
        dir = nextPath(dir, end);
    }
};

module.exports = findDown;
