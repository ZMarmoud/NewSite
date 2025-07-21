const express = require('express');
const router = express.Router();

// Temporary data (replace with a database later)
let courses = [
  { id: 1, code: 'MATH101', name: 'Calculus', credits: 6 },
  { id: 2, code: 'CS101', name: 'Programming Basics', credits: 5 }
];

// 1. GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// 2. GET a single course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

// 3. POST a new course
router.post('/', (req, res) => {
  const { code, name, credits } = req.body;
  const course = { id: courses.length + 1, code, name, credits };
  courses.push(course);
  res.status(201).json(course);
});

// 4. PUT (update) a course
router.put('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');

  course.code = req.body.code;
  course.name = req.body.name;
  course.credits = req.body.credits;

  res.json(course);
});

// 5. DELETE a course
router.delete('/:id', (req, res) => {
  courses = courses.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).send(); // No content
});

module.exports = router;
