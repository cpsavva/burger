const burgerModel = require('../models/burger.js');
const express = require('express');
const path = require('path');

/*Routes*/


module.exports = function(app){
  app.get("/", function(request, response) {

    response.render('index');

  });



};/*exports*/


