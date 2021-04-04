const mysql = require('mysql2');
 
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database : 'ejercicio7'
  });

connection.connect();

connection.query(`UPDATE employees
INNER JOIN countries ON employees.country_id = countries.id
INNER JOIN continents ON continents.id = countries.continent_id
SET employees.salary = employees.salary * ( 1 + continents.anual_adjustment /100 )
WHERE
	employees.salary <= 5000`, function (error, results, fields) {
    if (error) throw error;
    console.log('Se actualizo correctamente la cantidad de: ' + results.changedRows + ' registros de la BD');
});

connection.end();