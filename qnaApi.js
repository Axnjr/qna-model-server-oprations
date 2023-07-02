const express = require("express")
const qna = require("@tensorflow-models/qna")
require("@tensorflow/tfjs-node")
const expreesAsyncHandler = require("express-async-handler")
const router = express.Router({ mergeParams: true })
router.get("/" , expreesAsyncHandler(
    async (req,res) => {
        const passage = req.query.passage;
        const question = req.query.question;
        const model = await qna.load();
        const answers = await model.findAnswers(question, passage);
        res.json({
            "Type":"get",
            "Database entries => ":
            answers,passage,question
        })
    })
);
module.exports = router