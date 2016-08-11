# find-down [![Build status for find-down on Circle CI.](https://img.shields.io/circleci/project/sholladay/find-down/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/find-down "Find Down Builds")

> Find a file by walking down parent directories.

## Why?

 - Find files high up in the filesystem quickly.
 - Good at finding things that are *probably* in `$HOME`.
 - Is to [find-up](https://github.com/sindresorhus/find-up) what `indexOf` is to `lastIndexOf`.

## Install

```sh
npm install find-down --save
```

## Usage

Get it into your program.

```js
const findDown = require('find-down');
```

```
findDown('unicorn.png').then((filepath) => {
    console.log(filepath);
    //=> '/Users/sholladay/unicorn.png'
});
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/find-down/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/find-down/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/find-down/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/find-down/blob/master/LICENSE "The license for find-down.") © [Seth Holladay](http://seth-holladay.com "Author of find-down.")

Go make something, dang it.
