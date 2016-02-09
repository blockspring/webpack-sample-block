# Webpacked Blockspring Block

Sample block with bundled npm installed module and local module.

`my-name-lib` is included along side `index.js` and `node-snowflake` is an npm installed module that isn't included in the Blockspring docker image for nodejs blocks.

`npm run build` will build the block.js

`npm run test` will run the block with a test payload.

`npm run go` will run and test

If it works, `blockspring push` to send up the `block.js` file.
