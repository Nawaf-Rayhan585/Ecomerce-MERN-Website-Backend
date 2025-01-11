const app=require("./app");
require('dotenv').config();

const PORT = process.env.PORT;
app.listen(PORT , function () {
    console.log("App Run @5030")
})

