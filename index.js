'use strict';

const path = require('path');
const locatePath = require('locate-path');
const nextPath = require('next-path');

const findDown = (filename, option) => {
    const config = option || {};
    const end = path.resolve(config.cwd || '');
    const filenames = [].concat(filename);
    let dir = path.parse(end).root;

    return new Promise((resolve) => {
        (function find() {
            locatePath(filenames, { cwd : dir }).then((file) => {
                if (file) {
                    resolve(path.join(dir, file));
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
