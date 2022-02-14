# Reproduction repo for https://github.com/ionic-team/stencil/issues/2526

## Example:

- I built the library with `npm run build`.
- My dist folder created `dist/my-lib/my-lib.js`.
- This file is referencing `p-7ebf8cbf.system.js` which is calling these files:

```
['p-e92142d5.system', [[1, 'usp-alert', { type: [1] }]]],
['p-834bd2e4.system', [[1, 'usp-description-item', { header: [1], align: [1] }]]],
['p-025703f5.system', [[1, 'usp-descriptions']]],
['p-71736630.system', [[1, 'usp-divider', { spacing: [16] }]]],
['p-5c622091.system', [[1, 'usp-empty', { message: [1] }]]],
['p-d935a4b5.system', [[1, 'usp-list', { sublist: [4] }]]],
```

- I went into `src/components/list/list.tsx` and added `<li>hello</li>` before the closing `</ul>` tag.
- `npm run build`
- Still got `dist/my-lib/my-lib.js` pointing to `p-7ebf8cbf.system.js`.
- `p-7ebf8cbf.system.js` contents:

```
['p-e92142d5.system', [[1, 'usp-alert', { type: [1] }]]],
['p-834bd2e4.system', [[1, 'usp-description-item', { header: [1], align: [1] }]]],
['p-025703f5.system', [[1, 'usp-descriptions']]],
['p-71736630.system', [[1, 'usp-divider', { spacing: [16] }]]],
['p-5c622091.system', [[1, 'usp-empty', { message: [1] }]]],
['p-aeeaac6a.system', [[1, 'usp-list', { sublist: [4] }]]],
```

- Notice the usp-list filename hash changes, but `p-7ebf8cbf.system.js` hasn't changed. This results in that if `p-7ebf8cbf.system.js` is cached, it will still try to load `p-d935a4b5.system` but it wouldn't exist.