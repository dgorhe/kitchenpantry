module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "google",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: [ "tsconfig.json", "tsconfig.dev.json" ],
        sourceType: "module",
    },
    ignorePatterns: [
        "/lib/**/*", // Ignore built files.
    ],
    plugins: [
        "@typescript-eslint",
        "import",
    ],
    rules: {
        "quotes": [ "warn", "double" ],
        "indent": [ "error", 4 ],
        "semi": [ "error", "always" ],
        "eqeqeq": [ "error", "always" ],
        "max-len": [ "warn", { "code": 1024 } ],
        "camelcase": "off",
        "require-jsdoc": [ "off" ],
        "valid-jsdoc": [ "off" ],
        "object-curly-spacing": [ "error", "always" ],
        "array-bracket-spacing": [ "error", "always" ],
        "@typescript-eslint/no-unused-vars": [ "warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" } ],
        "@typescript-eslint/no-require-imports": 2,
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};
