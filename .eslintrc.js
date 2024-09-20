module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Compatible avec ES2020
    sourceType: "module", // Utilisation des modules ECMAScript
    project: "./tsconfig.json", // Lien vers votre tsconfig.json
  },
  env: {
    node: true, // Indique que c'est un environnement Node.js
    es6: true, // Permet les fonctionnalités ECMAScript 6
  },
  extends: [
    "eslint:recommended", // Règles ESLint par défaut
    "plugin:@typescript-eslint/recommended", // Règles spécifiques à TypeScript
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Règles nécessitant le typage
    "plugin:import/errors", // Pour gérer les erreurs d'import
    "plugin:import/warnings", // Pour gérer les avertissements d'import
    "plugin:import/typescript", // Intégration avec TypeScript pour les imports
    "plugin:prettier/recommended", // Assure la compatibilité avec Prettier
  ],
  plugins: [
    "@typescript-eslint", // Plugin TypeScript
    "simple-import-sort", // Pour ordonner les imports
    "import", // Pour gérer les imports
    "prettier", // Plugin Prettier
  ],
  rules: {
    // Règles spécifiques à ESLint
    "no-console": "warn", // Avertissement pour l'utilisation de console.log()
    "no-var": "error", // Interdit l'utilisation de `var`
    "prefer-const": "error", // Encourage l'utilisation de `const` si possible
    "no-unused-vars": "off", // Désactivé car géré par @typescript-eslint/no-unused-vars
    "no-empty-function": "off", // Géré par TypeScript

    // Règles spécifiques à @typescript-eslint
    "@typescript-eslint/no-unused-vars": ["error"], // Erreur pour les variables non utilisées
    "@typescript-eslint/no-explicit-any": "warn", // Avertissement pour l'utilisation de `any`
    "@typescript-eslint/explicit-function-return-type": "off", // Pas d'obligation de spécifier les types de retour
    "@typescript-eslint/no-inferrable-types": "off", // Autorise les types inférables explicites

    // Ordonnancement des imports
    "simple-import-sort/imports": "error", // Erreur si les imports ne sont pas triés
    "simple-import-sort/exports": "error", // Erreur si les exports ne sont pas triés

    // Règles liées aux imports
    "import/order": [
      "error",
      {
        // Ordre des imports (externe, interne, etc.)
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error", // Ligne vide après les imports
    "import/no-duplicates": "error", // Interdit les imports en double

    // Intégration Prettier pour garantir le formatage
    "prettier/prettier": "error", // Lève une erreur si le code n'est pas bien formaté
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // Essaye de résoudre les types pour les packages avec `@types`
      },
    },
  },
  ignorePatterns: ["node_modules", "dist"], // Ignore les dossiers non pertinents
};
