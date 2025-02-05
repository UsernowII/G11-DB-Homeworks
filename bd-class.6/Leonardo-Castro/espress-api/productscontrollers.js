let products = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics', description: 'A high performance laptop' },
    { id: 2, name: 'Coffee Mug', price: 10, category: 'Kitchenware', description: 'A ceramic coffee mug' }
  ];
  
  // Obtener todos los productos
  exports.getAllProducts = (req, res) => {
    res.json(products);
  };
  
  // Obtener producto por ID
  exports.getProductById = (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  };
  
  // Agregar un nuevo producto
  exports.addProduct = (req, res) => {
    const { name, price, category, description } = req.body;
  
    if (!name || !price || price <= 0 || !category || !description) {
      return res.status(400).json({ error: 'Invalid product data' });
    }
  
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      category,
      description
    };
  
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  // Actualizar un producto
  exports.updateProduct = (req, res) => {
    const { name, price, category, description } = req.body;
    const product = products.find(p => p.id === parseInt(req.params.id));
  
    if (!product) return res.status(404).json({ error: 'Product not found' });
  
    if (!name || !price || price <= 0 || !category || !description) {
      return res.status(400).json({ error: 'Invalid product data' });
    }
  
    product.name = name;
    product.price = price;
    product.category = category;
    product.description = description;
  
    res.json(product);
  };
  
  // Eliminar un producto
  exports.deleteProduct = (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
    if (productIndex === -1) return res.status(404).json({ error: 'Product not found' });
  
    products.splice(productIndex, 1);
    res.status(204).send();
  };
  