### tslint.json
```
{
    "extends": "@aleskozina/tslint",
    "linterOptions": {
        "exclude": [
            "**/node_modules/**/*"
        ]
    }
}
```

### Scripts
```
"lint": "tslint --project tsconfig.json --format stylish",
"lint:fix": "tslint --fix --project tsconfig.json --format stylish"
```