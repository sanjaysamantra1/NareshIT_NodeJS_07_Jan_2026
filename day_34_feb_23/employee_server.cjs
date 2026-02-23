const express = require('express');
const cors = require('cors');
const { ruruHTML } = require('ruru/server');
const { createHandler } = require('graphql-http/lib/use/express');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList,GraphQLNonNull } = require('graphql');


const app = express();
app.use(cors());

// data
const employees = [
    { id: 1, name: 'sachin tendulkar', sal: 5000, gender: 'male' },
    { id: 2, name: 'kapil dev', sal: 6000, gender: 'male' }
]

// Employee Type
const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        sal: { type: GraphQLInt },
        gender: { type: GraphQLString },
    }
})

// all queries
let myQueryObj = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employees: {
            type: new GraphQLList(EmployeeType),
            resolve: () => employees
        },
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLInt } },
            resolve: (_, { id }) => employees.find(emp => emp.id == id)
        }
    }
})

// all mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addEmployee: {
            type: EmployeeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                sal: { type: new GraphQLNonNull(GraphQLInt) },
                gender: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: (_, { name, sal, gender }) => {
                const newEmployee = { id: String(employees.length + 1), name, sal, gender };
                employees.push(newEmployee);
                return newEmployee;
            },
        },
        updateEmployee: {
            type: EmployeeType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                name: { type: GraphQLString },
                sal: { type: GraphQLInt },
                gender: { type: GraphQLString }
            },
            resolve: (_, { id, name, sal, gender }) => {
                const employee = employees.find((employee) => employee.id == id);
                if (!employee) throw new Error('Employee not found');
                if (name) employee.name = name;
                if (sal) employee.sal = sal;
                if (gender) employee.gender = gender;
                return employee;
            },
        },
        deleteEmployee: {
            type: EmployeeType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: (_, { id }) => {
                const employeeIndex = employees.findIndex((employee) => employee.id === id);
                if (employeeIndex === -1) throw new Error('Employee not found');
                return employees.splice(employeeIndex, 1)[0];
            },
        },
    },
});

let schema = new GraphQLSchema({ query: myQueryObj,mutation:Mutation })
app.all('/api/employees', createHandler({ schema }));


// graphql UI
app.get('/', (req, res) => {
    res.type('html')
    res.end(ruruHTML({ endpoint: "/api/employees" }))
})

app.listen({ port: 5000 });
console.log('Listening to port 5000');