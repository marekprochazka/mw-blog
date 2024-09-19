import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // your custom flat configs go here, for example:
    // {
    //   files: ['**/*.ts', '**/*.tsx'],
    //   rules: {
    //     'no-console': 'off' // allow console.log in TypeScript files
    //   }
    // },
    // {
    //   ...
    // }
    {
        rules: {
            'vue/multi-word-component-names': ['off'],
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                    ],
                    alphabetical: true,
                },
            ],
            quotes: ['error', 'single', {allowTemplateLiterals: true}],
            'vue/component-tags-order': [
                'error',
                {
                    order: ['script', 'template', 'style'],
                },
            ],
            'vue/require-default-prop': 'off',
        }
    }
)