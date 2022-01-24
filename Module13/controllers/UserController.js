import UserModel from "../models/User.js";
import bcrypt from 'bcrypt'
class UserController {
    static home = (req, res) => {
        res.render("index");
    }
    static registration = (req, res) => {
        res.render("registration");
    }
    static createDoc = async (req, res) => {
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        try {
            const doc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword,
            })
            console.log(doc);
            await doc.save();
            res.redirect('/login')
        } catch (error) {
            console.log(error);
        }
    }
    static login = (req, res) => {
        res.render("login");
    }
    static verifyLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            //console.log(email)
            const result = await UserModel.findOne({ email: email })
            console.log(result)
            if (result != null) {
                const ismatch = await bcrypt.compare(password,result.password);
                if (result.email == email && ismatch) {
                    res.send("Logged in")
                }
                else {
                    res.send("<h1>Not valid email and password</h1>")
                }
            } else {
                res.send("not valid");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserController