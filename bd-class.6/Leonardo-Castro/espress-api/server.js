const express = require('express');
const app = express();
const productsRoutes = require('./productsRoutes');

app.use(express.json());
app.use('/products', productsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
