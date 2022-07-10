import app from './app'
import './utils/database'
import { PORT } from './config'

app.listen(PORT);
console.log("Server on port ", PORT);
