const User = require("../models/User");
// const Product = require("../models/Product");
const { signToken, verifyToken } = require("../config/jwt");

exports.signup = (req, res, next) => {
  User.register({ ...req.body }, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }));
};
exports.login = (req, res, next) => {
  const [header, payload, signature] = signToken(req.user);
  res.cookie("headload", `${header}.${payload}.`, {
    // quitar comentarios cuando este en producción para máxima seguridad
    // maxAge: 1000 * 60 * 60 * 6,
    // secure: true
  });
  res.cookie("signature", signature, {
    // quitar comentarios cuando este en producción para máxima seguridad
    // httpOnly: true,
    // secure: true
  });
  res.status(200).json({ user: req.user });
};
exports.logout = (req, res, next) => {
  res.clearCookie("headload");
  res.clearCookie("signature");
  res.status(200).json({ msg: "You are now logged out" });
};
exports.profile = (req, res, next) => {
  User.findById(req.user._id, { hash: 0, salt: 0 })
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(401).json({ err }));
};
// buscar cómo cambiar el ID *****************************
// exports.profile = (req, res, next) => {
//   User.findById(req.user._id, { hash: 0, salt: 0 })
//     .then(user => res.status(200).json({ user }))
//     .catch(err => res.status(401).json({ err }))
// }
// export.viewAllPosts = (req, res, next) => {
//   Product.find()
//   .then( products => res.status(200).json({ products }))
//       .catch(err => res.status(500).json({ err }))
// }
