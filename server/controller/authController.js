const authModel = require("../models/auth");
const bcrypt = require("bcrypt")

class authController {
    async signin(req, res){
        try{
            const {email, password} = req.body;
            const user = await authModel.findOne({email});
            if(!user){
                return res.status(404).send({
                    success: false,
                    message: 'Email is not register'
                });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(404).send({
                    success: false,
                    message: 'Invalid username or password'
                });
            }
            return res.status(200).send({
                success: true,
                message: 'Login successfully',
                user
            })
        }catch(error){
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in log in",
                error
            })
        }
    };

    async getallofauth (req, res){
        try {
            const author = await authModel.findOne().populate('blogs');
            
            return res.status(200).send({
                success: true,
                message: "",
                blogs: author.blogs,
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: 'Error while get blog',
                error
            });
        }
    }

}

module.exports = new authController();