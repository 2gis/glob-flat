## glob-flat

Return glob applied, flattened and duplicate filtered version of the given list of filenames

## Install

## Usage

```js
flatGlob = require('glob-flat')

flatGlob.sync(['foo.js', 'styles/**/*.css', 'templates/index.html', 'templates/**/*.html'])
// => ['foo.js', 'styles/a.css', 'styles/b.css', 'templates/index.html', 'templates/foo.html', 'templates/bar.html']
```
