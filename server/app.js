const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
  
app.use(cors())

app.get('/', (req, res) => {
  data = [
    {
      content: "hello",
      isQuestion: false,
    },
    {
      content: "what is your name",
      isQuestion: true,
      questionType: 1,
    },
    {
      content: "you are fine",
      isQuestion: false,
    },
    {
      content: "what is your gender",
      isQuestion: true,
      questionType: 1,
    }
  ];
  res.send(JSON.stringify(data))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))