echo "Bundling scripts..."
browserify ./src/scripts/index.js -o ./public/bundle.js
echo "Translating Jade templates..."
node compile
echo "Moving CSS..."
cp -r ./src/css ./public
echo "Done"