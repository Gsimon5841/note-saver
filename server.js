const express = require ('express')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const {notes} = require('./db/db.json')



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





const PORT  = process.env.PORT || 3000;

app.listen( PORT, () => console.log(`listening on ${PORT}....`));