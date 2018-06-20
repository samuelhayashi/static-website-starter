module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parserOptions": {
    "sourceType": "script"
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "rules": {
    "indent": ["error", 2],
    "padded-blocks": "off",
    "wrap-iife": ["error", "inside"],
    "comma-dangle": ["error", "never"],
    "func-names": "off",
    "strict": ["error", "global"],
    "prefer-arrow-callback": "off",
    "no-underscore-dangle": "off"
  }
};
