module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: '2021',
        sourceType: 'module',
    },
    plugins: [
        'simple-import-sort',
        'modules-newline',
    ],
    extends: [
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'airbnb',
    ],
    rules: {
        // indent rules
        indent: [
            'error',
            4,
            { SwitchCase: 1 },
        ],
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],

        // line length rules
        'max-len': [
            'error',
            {
                comments: 256,
                code: 120,
                ignoreUrls: true,
            },
        ],

        // react rules
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',

        // hook rules
        'react-hooks/exhaustive-deps': 'off',

        // jsx rules
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',

        // import rules
        'import/extensions': [
            'error',
            'always',
        ],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/prefer-default-export': 'off',
        'modules-newline/import-declaration-newline': 'error',
        'modules-newline/export-declaration-newline': 'error',

        // newline rules
        'array-bracket-newline': [
            'error',
            { minItems: 2 },
        ],
        'array-element-newline': [
            'error',
            { minItems: 2 },
        ],
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 2,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 2,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 2,
                },
            },
        ],
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: false },
        ],
        'react/jsx-first-prop-new-line': [
            1,
            'multiline',
        ],
        'react/jsx-max-props-per-line': [
            1,
            { maximum: 1 },
        ],

        // jest rules
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',

        // misc rules
        'no-plusplus': 'off',
        'no-debugger': 'warn',
        'no-await-in-loop': 'off',
        'no-process-env': 'off',
        'linebreak-style': 0, // <-- Fixing the LF/CRLF issue
        semi: [
            'error',
            'always',
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
    },
    overrides: [{
        files: ['*.test.js'],
        rules: { 'no-unused-expressions': 'off' },
    }],
};
