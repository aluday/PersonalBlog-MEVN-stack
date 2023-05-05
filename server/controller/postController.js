const postModel = require("../models/blog");
const userModel = require("../models/auth");
const fileUpload = require('express-fileupload');

class postController {
    async getall (req, res){
        try {
            const blogs = await postModel.find({});
            if(!blogs){
                return res.status(200).send({
                    success: false,
                    message: 'No blogs found'
                });
            }
            return res.status(200).send({
                success: true,
                blogCount: blogs.length,
                message: "All blogs lists",
                blogs
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while getting blog',
                error
            })
        }
    };
    async create (req, res){
        try {
            const {title, description, content, auth} = req.body;
            const existingUser = await userModel.findOne({name: auth});
            if(!existingUser){
                return res.status(404).send({
                    success: false,
                    message: 'Unable to find user'
                });
            }
            const newPost  =  new postModel ({title, description, content,
                auth: existingUser._id});

            
            await newPost.save();

            await userModel.findByIdAndUpdate(existingUser._id, {
                $push: {blogs: newPost._id}
            })
            return res.status(200).send({
                success: true,
                message: 'Create blog successfully',
                newPost,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while creating blog',
                error,
            })
        }
    };
    async update (req, res){
        try {
            const {id} = req.params;
            const post = await postModel.findByIdAndUpdate(id, {...req.body}, {new: true})
            return res.status(201).send({
                success: true,
                message: 'Update blog successfully',
                post,
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while updating blog',
                error,
            });
        }
    };
    async getone (req, res){
        try {
            const {id} = req.params;
            const blog = await postModel.findById(id);
            if(!blog){
                return res.status(404).send({
                    success: false,
                    message: 'blog not found',
                });
            }
            return res.status(200).send({
                success: true, 
                message: 'fetch single blog',
                blog,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while get single blog',
                error
            });
        }
    };
    async delete (req, res){
        try {
            const {id} = req.params
        
            const blog = await postModel.findById(id);
            const authID = await String(blog.auth)
     
            await userModel.findByIdAndUpdate(authID, {
                $pull: {blogs:  blog._id}
            })
            await postModel.findByIdAndDelete(id);
        
            return res.status(200).send({
                success: true,
                message: 'Delete blog successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while deleting blog',
                error
            });
        }
    };
}

module.exports = new postController();