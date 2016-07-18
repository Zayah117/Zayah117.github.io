## Website Performance Optimization portfolio project

### Downloading and running

1. Click the green 'Clone or download' button
2. Download zip
3. Extract files
4. Run 'index.html' with a web browser

### Changes made to views/js/main.js

1. In updatePositions() I get the value of 'document.body.scrollTop / 1250'
and assign it to 'num' outside the for loop so I don't have to look up the
value everytime the loop runs.

2. Changed the for loop in changePizzaSizes() to be a lot simpler and faster.

3. Removed determineDx()