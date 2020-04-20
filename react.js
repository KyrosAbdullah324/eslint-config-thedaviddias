const readPkgUp = require('read-pkg-up')
const semver = require('semver')

let oldestSupportedReactVersion = '16.12.0'

try {
  const pkg = readPkgUp.sync({normalize: true})
  // eslint-disable-next-line prefer-object-spread
  const allDeps = Object.assign(
    {react: '16.12.0'},
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies,
  )
  oldestSupportedReactVersion = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare)[0]
} catch (error) {
  // ignore error
}

module.exports = {
  extends: ['prettier/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    'react/display-name': ['error', {ignoreTranspilerName: false}],
    'react/forbid-component-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'off',
    'react/no-adjacent-inline-elements': 'warn',
    'react/no-children-prop': 'off',
    'react/no-danger': 'off',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/jsx-curly-brace-presence': [
      'warn',
      {props: 'never', children: 'ignore'},
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'warn',
    'react/no-unused-state': 'error',
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-dom-props': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-no-useless-fragment': 'warn',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        "arrowParens": 'avoid',
        "endOfLine": 'lf',
        "htmlWhitespaceSensitivity": 'css',
        "insertPragma": false,
        "jsxBracketSameLine": false,
        "jsxSingleQuote": false,
        "printWidth": 80,
        "proseWrap": 'always',
        "quoteProps": 'as-needed',
        "requirePragma": false,
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": 'all',
        "useTabs": false,
      }
    ],
  },
}
