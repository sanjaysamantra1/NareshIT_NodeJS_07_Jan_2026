const express = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { getAllEmployees
    , getEmployeeById
    , addEmployee
    , updateEmployee
    , deleteEmployee
} =
    require('../controllers/employee.controller');
const router = express.Router();

router.get('/', authMiddleware, getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/', addEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
