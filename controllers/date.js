// import { Profile } from "../models/profile.js"
// import { Post } from "../models/post.js"
import { Profile } from "../models/profile.js"
import { Post } from "../models/post.js"
import { Flock } from "../models/flock.js"
import { NestMessage } from "../models/nestMessage.js"
import { User } from "../models/user.js"
 
 
export {
    index,
    showProfile,
    updateProfile,
    deleteProfile as delete,
    newPost,
    indexPosts,
    updatePost,
    deletePost,
    showPost,
    editProfile,
    
}
// function index(req, res) {
// res.render('dates/index')
 
function editProfile(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
      res.render('dates/schmedit', {
        title: `Editing ${profile.name}'s profile`,
        profile
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    }) 
}

function index(req, res) {
    Profile.find({})
    .sort({_id: -1})
    .limit(5)
    .then(profiles => {
        Flock.find({})
        .sort({_id: -1})
        .limit(3)
        .populate("profiles")
        .then(flocks => {
            Post.find({})
            .sort({_id: -1})
            .limit(10)
            .populate("author")
            .populate("likes")
            .then(posts => {
                res.render("dates/index", {
                    title: "Dates Home",
                    flocks,
                    posts,
                    profiles,
                })
            })
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/choose")
    })
}
function showProfile(req, res) {
    Profile.findById(req.params.id)
    .then(profile => {
        res.render("dates/profileShow", {
            title: `${profile.name}'s Profile`,
            profile,
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/choose")
    })
}
function updateProfile(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(profile => {
        console.log('This is profile:', profile)
      res.redirect(`/date/${profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
function deleteProfile (req, res) {
 
}
function newPost (req, res) {
 
}
function indexPosts (req, res) {
 
}
function updatePost (req, res) {
 
}
function deletePost (req, res) {
 
}
function showPost (req, res) {
 
}
