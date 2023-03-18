const express = require('express');
const router = express.Router();
const Comment = require("../models/Comment");
//
// const { auth } = require("../middleware/auth");


router.post("/saveComment", async (req, res) => {

    const newComment = new Comment(req.body);

    newComment.save(newComment).then((comment) => {
        res.status(201).json({success: true, comment})
    })


    // Comment.find({ '_id': comment._id })
    //     .populate('writer')
    //     .exec((err, result) => {
    //         if (err) return res.json({ success: false, err })
    //         return res.status(200).json({ success: true, result })
    //     })
    // })

})

router.post("/getComments", (req, res) => {
    // console.log("get comments")
    // const comments = Comment.find({ "postId": req.body.movieId });
    // console.log(comments);
    // res.status(200).json({ success: true, comments })
    Comment.find({"postId": req.body.movieId})
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({success: true, comments})
        })

});


module.exports = router;
