import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username:string , email:string , password:string) {
  const client = new Client({ connectionString: ""});

  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1 , $2 , $3)";
    const values = [username , email , password];
    const res = await client.query(insertQuery,values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData('username5','user5@example.com','user_password').catch(console.error);
