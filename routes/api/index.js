const router = require("express").Router();
const petSitterRoutes = require("./petSitter");
const memberRoutes = require("./member");


// Pet Sitter routes
router.use("/petSitter", petSitterRoutes);

// Member routes
router.use("/member", memberRoutes);



module.exports = router;