const express = require('express');
const app = express();
const port = 3000;

const postsPath = require('./modules/post')

app.use(express.static('public/images'));

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})


app.get('/bacheca', (req, res) => {
  const postId = postsPath.map((post, i) => {
    return {
      ...post,
      id: i + 1
    }
  })
  console.log(postId);

  res.json({
    post: postsPath,
  })
})


app.listen(port, () => {
  console.log(`port: ${port}`)
})

