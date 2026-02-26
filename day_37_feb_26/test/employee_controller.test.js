import * as chai from "chai";
const { expect } = chai;
import { default as chaiHttp, request } from "chai-http";
import sinon from 'sinon';

import { EmployeeModel } from "../src/models/employee_model.js";
import { app } from '../app.js';

chai.use(chaiHttp);

describe('Test Suite for Employee CRUD', () => { // Test Suite
    let findStub;
    let findByIdStub;

    beforeEach(() => {
        console.log('Before Each...')
        findStub = sinon.stub(EmployeeModel, 'find');
        findByIdStub = sinon.stub(EmployeeModel, 'findById');
    })
    afterEach(() => {
        console.log('After Each...')
        findStub.restore();
        findByIdStub.restore();
    })

    it.skip('Should verify getAllEmployees', async () => { // Test Case - 1
        console.log('test case-1');
        const mockEmployees = [
            { _id: 1111, name: 'sanjay', gender: 'male', sal: 5000 },
            { _id: 2222, name: 'reena', gender: 'mfeale', sal: 6000 }
        ]
        findStub.resolves(mockEmployees);
        const res = await request.execute(app).get('/employees');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployees)
    })
    it('Should verify getEmployeeById', async () => { // Test Case - 2
        console.log('test case-2');
        const mockEmployee = { _id: 1111, name: 'sanjay', gender: 'male', sal: 5000 }
        findByIdStub.resolves(mockEmployee);
        const res = await request.execute(app).get('/employees/123');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployee)
    })
    it('Should return 404 if employee is not found', async () => { // Test Case - 2
        findByIdStub.resolves(null);
        const res = await request.execute(app).get('/employees/123');
        expect(res).to.have.status(404);
        expect(res.text).to.equal('Employee Not Found')
    })

}); 