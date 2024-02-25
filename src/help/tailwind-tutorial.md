# Initialization

1. Create React app
2. `npm install -D tailwindcss postcss autoprefixer`
3. `npx tailwindcss init -p`

*src/tailwind.config.js*
> Keep everything as is, replace content with following
```
content: [
    "./src/**/*.{js,jsx}"
],
```

*src/styles.css*
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Zmena *style.css*
*src/package.json*
``` json
...
"scripts": {
    "build-css": "tailwindcss build src/styles.css -o public/styles.css"
}
...
```

Pri každej zmene hlavného css súboru alebo konfigurácie treba spraviť nasledovné:
`npm run build-css`
