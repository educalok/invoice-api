import 'reflect-metadata';
import express from 'express';

async function bootstrap() {
  // Init express
  const app = express();
  //Ruta opcional en el root del dominio que devuelve un mensaje
  app.get('/', (req, res) => res.json({msg: 'Welcome. Go to /graphql'}));

  const PORT = process.env.PORT || 4000;

  // app.listen on express server
  app.listen({port: PORT}, () => {
    console.log('App is listening on http://localhost:4000');
  });
}

bootstrap();
