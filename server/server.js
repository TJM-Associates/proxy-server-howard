require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const port = process.env.PORT || 3000;
const app = express();
const morgan = require('morgan');
app.use(morgan('tiny'));
app.use(compression());
app.use('/restaurants/:rid', express.static(path.resolve(__dirname, '../public')));

app.use('/', express.static(path.resolve(__dirname, '../loader')));


app.get('/api/restaurants/:rid/images', (req, res) => {
  res.redirect(`http://13.52.76.158/api/restaurants/${req.params.rid}/images`)
})

// GET reservation availability
app.get('/api/restaurants/:rid/availability' , (req, res) => {
  let id = req.params.rid.slice(1);
  res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}/availability?date=${req.query.date}&time=${req.query.time}&seats=${req.query.seats}`);
 });
 // GET restaurant info
 app.get('/api/restaurants/:rid' , (req, res) => {
  let id = req.params.rid.slice(1);
  res.redirect(`http://54.215.234.24:3003/api/restaurants/${id}`);
 });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

