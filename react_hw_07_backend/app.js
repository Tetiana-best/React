const express = require('express')
const cors = require('cors')
const fs = require('fs').promises
const path = require('path')

const app = express()

const PORT = process.env.PORT || 5000
// Ініціалізація JSON-файлу
// async function initializeProductsFile() {
//   try {
//     await fs.access(PRODUCTS_FILE)
//     console.log('✅ Файл products.json існує')
//   } catch {
//     await fs.writeFile(PRODUCTS_FILE, '[]')
//     console.log('🆕 Створено новий файл products.json')
//   }
// }



const DELAY_MS = 1000 // Затримка в мілісекундах
const PRODUCTS_FILE = path.join(__dirname, 'products.json')

// Мідлвер для затримки
const delayMiddleware = (req, res, next) => {
  setTimeout(next, DELAY_MS)
}

app.use(cors())
app.use(express.json())
app.use(delayMiddleware)

// Ініціалізація JSON-файлу
async function initializeProductsFile() {
  try {
    await fs.access(PRODUCTS_FILE)
  } catch {
    return res.status(500).json({ error: 'No data' })
  }
}

// Читання продуктів
async function readProducts() {
  const data = await fs.readFile(PRODUCTS_FILE, 'utf8')
  return JSON.parse(data)
}

// Запис продуктів
async function writeProducts(products) {
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2))
}

// Отримання всіх продуктів
app.get('/api/products', async (req, res) => {
  const products = await readProducts()
  res.json(products)
})

// Отримання продукту за ID (НОВИЙ МАРШРУТ)
app.get('/api/products/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const products = await readProducts()
  const product = products.find((p) => p.id === id)
  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }
  res.json(product)
})

// Пошук за назвою (частковий збіг)
app.get('/api/products/search', async (req, res) => {
  const query = req.query.q ? req.query.q.toLowerCase() : ''
  const products = await readProducts()
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  )
  res.json(filtered)
})

// Додавання продукту
app.post('/api/products', async (req, res) => {
  const { name, price, imageUrl } = req.body
  if (!name || !price || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const products = await readProducts()
  const newProduct = {
    id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    price,
    imageUrl,
  }
  products.push(newProduct)
  await writeProducts(products)
  res.status(201).json(newProduct)
})

// Оновлення продукту
app.put('/api/products/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const { name, price, imageUrl } = req.body
  if (!name || !price || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' })
  }
  const products = await readProducts()
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' })
  }
  products[index] = { id, name, price, imageUrl }
  await writeProducts(products)
  res.json(products[index])
})

// Видалення продукту
app.delete('/api/products/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const products = await readProducts()
  const index = products.findIndex((p) => p.id === id)
  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' })
  }
  const deleted = products.splice(index, 1)[0]
  await writeProducts(products)
  res.json(deleted)
})

// Запуск сервера
initializeProductsFile().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})




