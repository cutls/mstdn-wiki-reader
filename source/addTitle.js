const fs = require('fs')
const dirs = fs.readdirSync('_posts')
for(const f of dirs) {
    const contents = fs.readFileSync(`./_posts/${f}`)
    const writer = `---
title: ${f}
---
${contents}`
    fs.writeFileSync(`./_posts/${f}`, writer)
}