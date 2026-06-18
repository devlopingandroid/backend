const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about',(req,res)=>{
    res.send("this is about page");
})

app.get('/contact',(req,res)=>{
    res.send("this is contact page");
})

app.get('/github',(req,res)=>{
    res.send(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
