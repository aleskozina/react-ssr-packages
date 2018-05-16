module.exports = {
    extends: 'tslint-config-airbnb',
    rules: {
      'no-console': false,
      'variable-name': [
        true,
        'allow-pascal-case',
      ],
      'quotemark': [
        true,
        'single',
        'jsx-double',
      ],
      'no-magic-numbers': false,
      'import-name': false,
    },
  };