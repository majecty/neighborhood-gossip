# neighborhood-gossip

## 1 time install

```bash
npm install
```

## css build

```bash
npx tailwindcss -i ./src/css/input.css -o ./static/css/output.css --watch
```

## dev web server

```bash
npx serve static
```

## bundle js

```bash
npx esbuild --watch src/js/app.js --bundle --outfile=static/js/bundle.js
```
