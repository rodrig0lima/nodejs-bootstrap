const config = require("../config");
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers["x-access-token"];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.segredo, function(err, decoded) {
        if (err) {
            return res
                .status(401)
                .json({ success: false, message: "Falha ao autenticar a token." });
        } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
        }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
        success: false,
        message: "Nenhum token informado."
    });
  }
}

module.exports = {
    authenticate: authenticate
};
