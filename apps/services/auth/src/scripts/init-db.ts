import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = 'yougopay_auth';
const DB_USER = 'postgres';
const DB_PASSWORD = 'postgres';

async function initializeDatabase() {
  // Connect to default postgres database first
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: DB_USER,
    password: DB_PASSWORD,
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL');

    // Check if database exists
    const dbCheck = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [DB_NAME]
    );

    if (dbCheck.rowCount === 0) {
      console.log(`Creating database ${DB_NAME}...`);
      await client.query(`CREATE DATABASE ${DB_NAME}`);
      console.log(`Database ${DB_NAME} created successfully`);
    } else {
      console.log(`Database ${DB_NAME} already exists`);
    }

    // Connect to the new database to set up schema
    await client.end();
    
    const dbClient = new Client({
      host: 'localhost',
      port: 5432,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    await dbClient.connect();
    console.log(`Connected to ${DB_NAME}`);

    // Create schema if it doesn't exist
    await dbClient.query('CREATE SCHEMA IF NOT EXISTS public');
    
    // Grant privileges
    await dbClient.query(`GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER}`);
    await dbClient.query(`GRANT ALL PRIVILEGES ON SCHEMA public TO ${DB_USER}`);
    
    console.log('Database initialization completed successfully');
    await dbClient.end();

  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

// Run the initialization
initializeDatabase(); 