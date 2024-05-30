const t = require('tap')
const {alpha} = require('../alpha')

t.test('alpha', async t => {    
    t.equal(alpha(), 1)
})