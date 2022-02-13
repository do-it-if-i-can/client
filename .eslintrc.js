module.exports = {
  settings: {
    react: { version: "detect" },
    tailwindcss: {
      cssFiles: [
        "src/**/*.css",
        "node_modules/daisyui/dist/*.css",
        "!**/.*",
        "!**/build",
        // "**/*.css",
        // "!**/node_modules",
        // "!**/dist",
      ],
    },
  },
  env: { browser: true, es2021: true, node: true, jest: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 13,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: [
    // "react",
    // "@typescript-eslint",
    // "import",
    "import-access",
    // "jsx-a11y",
    // "node",
    // "promise",
    // "react-hooks",
    "simple-import-sort",
    "tailwindcss",
  ],
  rules: {
    "linebreak-style": ["error", "unix"],
    "comma-dangle": "off",
    "no-undef": "warn",
    "no-console": ["warn", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": ["error", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "no-use-before-define": ["off", { paths: [{ name: "react", importNames: ["default"] }] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["error", "never"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [{ files: ["**/*.spec.js", "**/*.spec.jsx"], env: { jest: true } }],
};
