import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    description: "A high performance laptop"
  },
  {
    id: 2,
    name: "Coffee Mug",
    price: 10,
    category: "Kitchenware",
    description: "A ceramic coffee mug"
  }
];


//Verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.send('Bienvenido a la API REST de Gestión de Productos');
  });
  
// Obtener la lista de productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Producto no encontrado');
  res.json(product);
});

// Agregar un nuevo producto
app.post('/products', (req, res) => {
  const { name, price, category, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Actualizar un producto existente
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Producto no encontrado');

  const { name, price, category, description } = req.body;
  product.name = name;
  product.price = price;
  product.category = category;
  product.description = description;

  res.json(product);
});

// Eliminar un producto
app.delete('/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Producto no encontrado');

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });