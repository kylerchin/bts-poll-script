# Billboard voting bot

Step 1. Install tor service via package manager. Not the browser.

Step 1.b : Test your tor setup: `curl --socks5 localhost:9050 --socks5-hostname localhost:9050 -s https://check.torproject.org/ | cat | grep -m 1 Congratulations | xargs`

Step 2: Install dependencies. `npm install`

Step 3: Run. `node tor.js`