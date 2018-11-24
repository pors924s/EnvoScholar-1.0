const express = require("express");
const router = express.Router();

const ctrlUser = require("../controllers/user.controller");

const ctrlfeedBack = require("../controllers/feedBack.controller");

const jwtHelper = require("../config/jwtHelper");

router.post("/register", ctrlUser.register);
router.post("/authenticate", ctrlUser.authenticate);
router.get("/userProfile", jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post("/savearticle", jwtHelper.verifyJwtToken, ctrlUser.saveArticle);
router.post("/savesearch", jwtHelper.verifyJwtToken, ctrlUser.saveSearch);
router.post("/saveclick", jwtHelper.verifyJwtToken, ctrlUser.saveClick);
router.post("/question1", ctrlfeedBack.question1);
router.post("/question2", ctrlfeedBack.question2);

module.exports = router;
