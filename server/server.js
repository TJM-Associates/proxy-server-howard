require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const port = process.env.PORT || 3000;
const app = express();
app.use(compression());
app.use('/restaurants/:rid', express.static(path.resolve(__dirname, '../public')));

app.use('/', express.static(path.resolve(__dirname, '../loader')));


app.get('/api/restaurants/:rid/images', (req, res) => {
  res.redirect(`http://54.193.42.82:3002/api/restaurants/${req.params.rid}/images`)
})


app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
