require("colors")
const exprees = require("express")
// const router1 = require("./toxicityApi")
const router2 = require("./qnaApi")
const PORT = process.env.PORT || 4000
const app = exprees()
app.listen(PORT, () => {console.log("done", __dirname,"/",__filename.bgRed.cyan)});
app.use(exprees.json())
app.use(exprees.urlencoded({ extended : false }))
// app.use("/toxicity" , router1 )
app.use("/qna" , router2)
