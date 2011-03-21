var request = require('request'),
    sys = require('sys');

    request({uri:'http://www.euroresidentes.com/Recetas/cocina_vegetariana/ensalada_apio.htm'}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          sys.puts(body) // Print the google web page.
            }
            });