const express = require('express')
const app = express()
const port = 3000
app.use(express.static('/backend/dist'))
 app.get('/', (req, res) => {
   res.send('Hello World2!')
 })
app.get('/api/jokes', (req, res) => {
    const joke=[
        {
            id:1,
            title:"A joke",
            content:"Joke 1"
        },
        {
            id:2,
            title:"B joke",
            content:" Joke 2"
        },
        {
            id:3,
            title:"C joke",
            content:"Joke 3"
        },
        {
            id:4,
            title:"D joke",
            content:"joke 4"
        },
        {
            id:5,
            title:"E joke",
            content:"joke 5"
        },
    ]
    res.send(joke);
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})