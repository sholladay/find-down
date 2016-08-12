'use strict';

const path = require('path');
const pathExists = require('path-exists');
const nextPath = require('next-path');

const findDown = (filename, option) => {
    const config = option || {};

    const end = path.resolve(config.cwd || '');
    let dir = path.parse(end).root;

    return new Promise((resolve) => {
        (function find() {
            const fp = path.join(dir, filename);
            pathExists(fp).then((exists) => {
                if (exists) {
                    resolve(fp);
                }
                else if (dir === end) {
                    resolve(null);
                }
                else {
                    dir = nextPath(dir, end);
                    find();
                }
            });
        }());
    });
};

module.exports = findDown;
