const express = require("express");
const app = express()
const PORT = 4100

app.get("/hello", (req, res) => {
    let r = Math.random() 
    if (r > .5) {
        res.json({n: r, greaterThanHalfOne: true, Ester: true})
    }   else {
        res.json({n: r, greaterThanHalfOne: false, Ester: true})
    }
})

app.listen(PORT)
console.log(`Listening on port ${PORT}` )