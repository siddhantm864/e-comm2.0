import User from "../models/mongo/user.model.js";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    // res.status(201).json({message:"user successfully registered"})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const googleSignup = async (req, res) => {
  // console.log("this is google sign in", req.body);
  // try {
  //   const { token } = req.body;
  //   if (!token) {
  //     return res.status(400).json({ error: "No access token provided" });
  //   }

  //   // Fetch user info from Google using the access token
  //   const response = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   const { email, id: googleId, name } = response.data;

  //   if (!email) {
  //     return res.status(400).json({ error: "Failed to retrieve user info from Google" });
  //   }
  try {
    const { credential } = req.body;
    if (!credential)
      return res.status(400).json({ error: "No credential provided" });
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, sub: googleId, name } = payload;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(200).json(user);
    }
    user = new User({
      username: name,
      email,
      provider: "google",
      googleId,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Email does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default { signup, googleSignup, login };
