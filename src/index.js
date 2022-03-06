import app from "./App.js";
import './database/connection';
app.listen(app.get('port'));

console.log('Server on port ', app.get('port'));

