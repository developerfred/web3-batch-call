module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "arrow-parens": ["error", "always"],
    "max-depth": ["error", 1],
    "max-nested-callbacks": ["error", 0],
    "arrow-body-style": [2, "as-needed"],
    "func-names": ["error", "always"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  },
};
