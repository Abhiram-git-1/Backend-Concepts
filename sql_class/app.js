const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@123',
  database: 'backend'
});

try{
  connection.query('SHOW TABLES', (err, results) => {
    if (err) {
      console.error('Error occurred:', err);
    } else {
      console.log('Tables in the database:');
      console.log(results);
    }
  });
} catch (error) {
  console.error('Error occurred:', error);
}

let  createRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
 
  };
};
console.log(createRandomUser());
