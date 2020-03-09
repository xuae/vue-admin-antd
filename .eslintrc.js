module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['sort-imports-es6-autofix'],
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',

    // 'plugin:vue/essential',
    // 'plugin:vue/strongly-recommended',
    // '@vue/prettier',
    //
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended',
    //
    // '@vue/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    /**
     * Vue 配置规则: https://eslint.vuejs.org/rules/
     */
    'vue/no-v-html': 'off',
    'vue/no-unused-vars': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'off',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'off',
      {
        startTag: 'always',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          component: 'any',
        },
      },
    ],

    /**
     * 规则配置: https://eslint.bootcss.com/docs/rules/
     * 'off' | 0: 表示关掉，
     * 'warn' | 1: 表示发出警告
     * 'error' | 2: 表示发出错误
     *
     * 'always': 总是开启
     * 'never': 从不开启
     */

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /**
     * Possible Errors
     * 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关
     */

    'no-case-declarations': 'off',
    'no-await-in-loop': 'error',
    'no-template-curly-in-string': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-regex-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'no-unsafe-negation': 'error',
    // 'valid-jsdoc': 'error', // 强制使用 JSDoc 注释风格

    /**
     * Best Practices
     * 这些规则是关于最佳实践的，帮助你避免一些问题
     */
    'curly': ['error', 'all'], // 强制使用大括号，单条语句不能省略大括号
    'eqeqeq': ['error', 'smart'], // 'smart' 除了以下这些情况外，强制使用 === 和 !==：比较两个字面量的值，比较 typeof 的值，与 null 进行比较
    'no-else-return': ['error', { allowElseIf: true }], // (默认) 允许在 return 之后有 else if 块
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'wrap-iife': ['error', 'inside'],
    'yoda': ['error', 'never'],

    /**
     * Variables
     * 这些规则与变量声明有关
     */

    'no-undef-init': 'error',
    // 'no-unused-vars': 'off',

    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常主观的
     */

    'array-bracket-newline': 'off',
    'lines-around-comment': [
      'off',
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: true,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    // 'space-before-function-paren': ['error', 'always'], // 要求或禁止函数圆括号之前有一个空格
    'indent': [2, 2, { SwitchCase: 1 }],
    'no-tabs': ['error', { allowIndentationTabs: true }],

    /**
     * ECMAScript 6
     * 这些规则只与 ES6 有关, 即通常所说的 ES2015
     */
    'arrow-parens': ['error', 'as-needed'], // 要求箭头函数的参数使用圆括号
    'arrow-spacing': ['error', { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
    'no-confusing-arrow': ['error', { allowParens: false }],
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ], // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ], // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-spread': 'error', // 建议使用扩展运算符而非.apply()
    'prefer-template': 'error', // 建议使用模板而非字符串连接
    'rest-spread-spacing': ['error', 'never'], // 强制剩余和扩展运算符及其表达式之间有空格
    'sort-imports': 'off', // import 排序
    // 'template-curly-spacing': ['error', 'always'], // 强制模板字符串中空格的使用
    'yield-star-spacing': ['error', 'both'], // 强制在 yield* 表达式中 * 周围使用空格

    /**
     * 自动格式化代码 prettier 配置
     */

    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        quoteProps: 'consistent',
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        useTabs: false,
        vueIndentScriptAndStyle: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
