const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");

const jwtHelper = require("../config/jwtHelper");

/**
 * These will be called depending on which function is called from the user.service.ts
 */
router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post("/savearticle", jwtHelper.verifyJwtToken, ctrlUser.saveArticle);
router.post("/savesearch", jwtHelper.verifyJwtToken, ctrlUser.saveSearch);
router.post("/saveclick", jwtHelper.verifyJwtToken, ctrlUser.saveClick);

module.exports = router;
