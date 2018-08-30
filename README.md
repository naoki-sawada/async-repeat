# async repeat

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Testing](#testing)
- [License](#license)

## About

Repeat function with async.

## Install

```shell
npm install async-repeat
```

## Usage

```javascript
// CommonJS
// const axiosRetry = require('async-repeat');

// ES6
import asyncRepeat from "async-repeat";

(async () => {
  await asyncRepeat(
    async done => {
      try {
        const res = await rp("http://www.google.com");
        done();
      } catch (e) {
        // Do nothing, repeat.
      }
    },
    {
      delay: 1000, // default 3000
      maxCount: 5, // default 10
    },
  );
})();
```

### API

```
asyncRepeat(retrier: Function, options: Object) => Promise
```

#### Retrier

* The supplied function receives two parameters:
  * done: Resolve repeat function.
  * utils: Utilities for repeat function.
    * utils.checkCount: Repeat count.
    * utils.reject: Reject the repeat function.
    * utils.resovle: Resolve the repeat function, it same `done`.

#### Options

| Name          | Type   | Default | Description                                                |
| ------------- | ------ | ------- | ---------------------------------------------------------- |
| delay         | number | 3000    | Repeat interval (ms).                                      |
| maxCount      | number | 10      | Maximum repeat times.                                      |
| defaultResult | any    | null    | Return value when the maximum number of times is exceeded. |

## Testing

Clone the repository and execute:

```
npm test
```

## Contribute

Open an [issue](https://github.com/naoki-sawada/async-repeat/issues/new) or submit [PRs](https://github.com/naoki-sawada/async-repeat/pulls).

## License

MIT.
