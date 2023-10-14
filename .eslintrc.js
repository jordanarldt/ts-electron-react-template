module.exports = {
  ignorePatterns: "**/*.js",
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "prettier/prettier": 2,
    "import/first": 2,
    "import/order": [
      2,
      {
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "{react,electron,electron/**}",
            group: "builtin",
          },
          { pattern: "@/**", group: "internal" },
          { pattern: "@!(/)**", group: "external" },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type",
        ],
        pathGroupsExcludedImportTypes: ["type"]
      },
    ],
  },
};
