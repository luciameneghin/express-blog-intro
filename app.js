const express = require('express');
const app = express();
const port = 3000;

const posts = require('./modules/post')


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {
  res.json({
    post: posts,
    counter: posts.length,
  })
})




app.listen(port, () => {
  console.log(`port: ${port}`)
})