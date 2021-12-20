import { getConnectionManager } from 'typeorm';

if (
  process.env.NODE_ENV === 'production'
  && process.env.DATABASE_URL.indexOf('sslmode=require') === -1
) {
  process.env.DATABASE_URL += '?sslmode=require';
}
// heroku didnt send the DATABASE_URL
// to run using heroku use this
// heroku DATABASE_URL = 'postgres://kcsheiqtdmrrcr:27531a6cb75fdcc3366d78a904b605cc6daca12e2a23272a12d3b2e8bd4b7322@ec2-54-157-113-118.compute-1.amazonaws.com:5432/dfq0bgdmamtvif'
// const ssl ='?ssl=true';
export default async function connect() {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      `${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/Entities/*.*`,
    ],
  });
  await connection.connect();
  return connection;
}
