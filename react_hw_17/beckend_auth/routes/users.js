import express from 'express';
import { v4 as uuidv4 } from 'uuid'; // <-- додано uuid
import { requireAuth, requireRole } from '../middleware/auth.js';
import { readJSON, writeJSON } from '../utils/fileDb.js';

const router = express.Router()
const file = './data/users.json'

// Пагінований роут
router.get('/', requireAuth, requireRole('admin'), async (req, res) => {
  const users = await readJSON(file)
  const pageNum = parseInt(req.query.page) || 1
  const limitNum = parseInt(req.query.limit) || 10
  const totalItems = users.length
  const totalPages = Math.ceil(totalItems / limitNum)
  const startIdx = (pageNum - 1) * limitNum
  const endIdx = startIdx + limitNum
  const items = users.slice(startIdx, endIdx)
  res.json({
    items,
    page: pageNum,
    limit: limitNum,
    totalItems,
    totalPages,
  })
})

router.get('/all', requireAuth, requireRole('admin'), async (req, res) => {
  const users = await readJSON(file)
  res.json(users)
})


router.post('/', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    const users = await readJSON(file)
    const { name, email, role } = req.body

    if (!name || !email || !role) {
      return res.status(400).json({ message: 'Name, email and role are required' })
    }

    const newUser = {
      id: uuidv4(), // генеруємо унікальний id
      name,
      email,
      role,
    }

    users.push(newUser)
    await writeJSON(file, users)

    res.status(201).json(newUser)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', requireAuth, async (req, res) => {
  const users = await readJSON(file)
  const user = users.find((u) => u.id == req.params.id)
  if (!user) return res.sendStatus(404)
  res.json(user)
})

router.delete('/:id', requireAuth, requireRole('admin'), async (req, res) => {
  try {
    let users = await readJSON(file)
    const userId = req.params.id
    const userExists = users.find(u => u.id === userId)
    if (!userExists) return res.sendStatus(404)

    users = users.filter(u => u.id !== userId)
    await writeJSON(file, users)
    res.sendStatus(204)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router


