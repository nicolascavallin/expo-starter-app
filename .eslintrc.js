/* eslint-disable sort-keys */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@react-native-community", "plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    // Aerolab defaults
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "@typescript-eslint/no-use-before-define": "warn",
    curly: "warn",
    camelcase: "off",
    "import/extensions": ["error", "never", { json: "always" }],
    "import/named": "off",
    "import/namespace": "off",
    "import/no-cycle": "error",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "error",
    "import/order": "warn",
    "linebreak-style": ["error", "unix"],
    "newline-before-return": "error",
    "no-console": "warn",
    "sort-imports": "error",
    strict: ["error", "global"],
    // Fixed from defaults
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Added by Team
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".tsx"] }],
    "no-use-before-define": ["off", { classes: true, functions: true }],
    // "sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 2, natural: false }],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: ["key", "id"],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
};
