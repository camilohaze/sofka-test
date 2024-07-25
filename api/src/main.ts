import { createExpressServer } from "routing-controllers";
import "dotenv/config";

let PORT = 3002;

const app = createExpressServer({
  routePrefix: "/bp",

  controllers: [__dirname + "/controllers/*{.js,.ts}"],
  cors: {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});
