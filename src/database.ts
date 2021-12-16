import { getConnectionManager } from 'typeorm';

// if (
//   process.env.NODE_ENV === 'production'
//   && process.env.DATABASE_URL.indexOf('sslmode=require') === -1
// ) {
//   process.env.DATABASE_URL += '?sslmode=require';
// }

const ssl ='?ssl=true';
export default async function connect() {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL + ssl,
    entities: [
      `${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/Entities/*.*`,
    ],
    extra: {
      ssl: true,
    },
  });
  await connection.connect();
  return connection;
}
