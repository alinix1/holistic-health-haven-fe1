module.exports = {
  ignorePatterns: [
    "*.js",
    "node_modules",
    "dist",
    "build",
    "coverage",
    ".eslintrc.js",
  ],
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.json"],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ["react", "@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/no-unescaped-entities": "off",

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],

    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",

    camelcase: [
      "error",
      { properties: "never", allow: ["product_type", "product_title"] },
    ],
    "no-plusplus": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    {
      files: [".eslintrc.js"],
      parserOptions: {
        project: null,
      },
    },
  ],
};
