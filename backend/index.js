const express = require('express');

const UserRouter = require('./router/userRouter');

const HandicraftRouter = require('./router/HandicraftRouter');

const ContactRouter = require('./router/contactRouter')
const utilRouter = require('./router/util')

const cors = require('cors');

const app = express();
const port = 3000;



app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use('/user', UserRouter);

app.use('/Handicraft',HandicraftRouter);

app.use('/Contact', ContactRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

app.listen(port, () => { console.log('server started!!'); });