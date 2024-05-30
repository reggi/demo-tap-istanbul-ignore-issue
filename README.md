This shows that `/* istanbul ignore next */` isn't working in `beta.js` 😭

```
➜  demo-tap-istanbul-ignore-issue npm test   
npm verb cli /Users/reggi/.nvm/versions/node/v20.12.2/bin/node /Users/reggi/.nvm/versions/node/v20.12.2/bin/npm
npm info using npm@10.5.2
npm info using node@v20.12.2
npm verb title npm test
npm verb argv "test"
npm verb logfile logs-max:10 dir:/Users/reggi/.npm/_logs/2024-05-30T17_18_25_310Z-
npm verb logfile /Users/reggi/.npm/_logs/2024-05-30T17_18_25_310Z-debug-0.log
npm sill logfile start cleaning logs, removing 1 files

> demo-tap-istanbul-ignore-issue@1.0.0 test
> tap --show-full-coverage

npm sill logfile done cleaning log files
 PASS  test/alpha.js 1 OK 912ms

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   78.57 |      100 |      50 |   78.57 |                  
 alpha.js |     100 |      100 |     100 |     100 |                  
 beta.js  |   57.14 |      100 |       0 |   57.14 | 3-5              
----------|---------|----------|---------|---------|-------------------

                       
  🌈 TEST COMPLETE 🌈  
                       

Asserts:  1 pass  0 fail  1 of 1 complete
Suites:   1 pass  0 fail  1 of 1 complete

# { total: 1, pass: 1 }
# time=969.46ms

npm verb exit 1
npm verb code 1
```