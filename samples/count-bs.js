// Count all of the links from the nodejs build page
var jsdom = require("jsdom");

jsdom.env("http://www.euroresidentes.com/Recetas/cocina_vegetariana/ensalada_apio.htm", [
  'http://code.jquery.com/jquery-1.5.min.js'
  ], function(errors, window) {
    console.log("there have been", window.$("a b").length, "bold links");
    });