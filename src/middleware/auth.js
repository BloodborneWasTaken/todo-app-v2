import jwt from "jsonwebtoken";
import c from "config";
import Auth from "../models/user";

export default async function Authorzation(req, res, next) {
  const token = req.header.auth_token;
  if (!token) return res.status(401).send("UnAthorized");
  const verify = await jwt.verify(token, c.get("jwt_secret"));
  if (!verify) return res.status(401).send("UnAthorized");
  const user = await Auth.findById(verify.id);
    if (!user) return res.status(401).send("UnAthorized")

        req.user = user.id
        next()

}
