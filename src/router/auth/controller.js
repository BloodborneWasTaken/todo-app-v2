import Auth from "../../models/user.js";
import _ from "lodash";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import c from "config";


    export default new class {


  async register(req, res) {
    let body = _.pick(req.body, ["email", "password"])

    const exists = await Auth.findOne({ email: body.email });
    if (exists) return res.status(400).send("email already exists");

    const saltround = 10;
    body.password = await bcrypt.hash(body.password, saltround);
    const newUser = await Auth.create(body);

    res.json({
      msg :"account succsessfully created",
      data : _.pick(newUser , ["email"])
    })
  }

  async login(req , res ){
        let body = _.pick(req.body, ["email", "password"]);
    const exists = await Auth.findOne({ email: body.email });
    if (!exists) return res.status(404).send("the email or password is invalid");

    const check = await bcrypt.compare(body.password ,  exists.password)
    if(!check) return res.status(400).send("the email or password is invalid");

    const payload = {id:exists.id}
    const token = await jsonwebtoken.sign(payload , c.get("jwt_secret"));
    return res.json({
      msg:"login completed",
      token : token
    })
  }

};
