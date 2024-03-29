const router = require("express").Router();
const User = require("../models/User");

const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");
const Movie = require("../models/Movie");

//UPDATE
//post favorite
router.put("/favorite", verify, async (req, res) => {

    try {
        const updateUser = await User.findByIdAndUpdate(req.user.id, {$push: {favoriteMovies: req.body.addMovie}},
            {new: false},);
        res.status(201).json({favoriteMovies: updateUser.favoriteMovies});
    } catch (err) {
        res.status(500).json(err);
    }

});
//get all favorite
router.get("/favorite", verify, async (req, res) => {
    try {
        const user1 = await User.find({_id: req.user.id});
        res.status(200).json({favoriteMovies: user1[0].favoriteMovies});
    } catch (err) {
        console.log(err);
    }
});
//delete favorite
router.post("/deleteFavorite", verify, async (req, res) => {
    try {
        console.log(req.body.deleteMovie);
        await User.findByIdAndUpdate(req.user.id, {$pull: {favoriteMovies: req.body.deleteMovie}},
            {new: true},);
        // User.update({_id: req.user.id},
        //     {$pull: {'favoriteMovies': req.body.deleteMovie}});
        // WriteResult({"nMatched": 1, "nUpserted": 0, "nModified": 1})
        // console.log(user1.favoriteMovies);
        res.status(200).json();
    } catch (err) {
        res.status(500).json(err);
    }
});

//get isFavorite of movie
router.post("/isMovieInUserFavorites", verify, async (req, res) => {
    try {
        const user1 = await User.find({_id: req.user.id});
        res.status(200).json({isMovieInUserFavorites: user1[0].favoriteMovies.includes(req.body.movieId)});
    } catch (err) {
        console.log(err);
    }
});

router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can update only your account!");
    }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});


//GET

router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query
                ? await User.find().sort({_id: -1}).limit(5)
                : await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to see all users!");
    }
});

module.exports = router;
