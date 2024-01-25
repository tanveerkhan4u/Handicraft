const mongoose = require('mongoose');

const url = "mongodb+srv://khantanveer6077:18040471804047@cluster0.rki85vw.mongodb.net/miniproject?retryWrites=true&w=majority";





mongoose.connect(url)
.then((result) => {

  console.log('connected to mongodb');
})
.catch((err) => {
  console.error(err);
});

console.log('tarak mehta ka ulta chashma');
setTimeout(() => {console.log('delayed task');},1000);

console.log('tmkoc');

module.exports = mongoose;
