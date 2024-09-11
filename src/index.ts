import { configuration } from "./config.js";
import  app  from "./server.js";

app.listen(configuration.port, () => {
  console.log(`El usuario ${configuration.username} ha levantado la aplicacion en el puerto ${configuration.port}`);
});


