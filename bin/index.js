#!/usr/bin/env node

import { App } from "../esm";

try {
  var app = new App(process.argv, process.cwd());
} catch (err) {
  process.exit(1);
}

app
  .run()
  .then(code => {
    process.exit(code);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
