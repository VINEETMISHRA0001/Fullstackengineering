import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('Should return 201 status code:', async () => {
            // formula => AAA i.e. (Arrange, Act, Assert)

            // Arrange
            const userData = {
                firstName: 'Vineet',
                lastName: 'Mishra',
                email: '02vineet@gmail.com',
                password: '12345678',
            };

            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);

            // Assert
            expect(response.statusCode).toBe(201);
        });

        it('Should return 201 status code:', async () => {
            // formula => AAA i.e. (Arrange, Act, Assert)

            // Arrange
            const userData = {
                firstName: 'Vineet',
                lastName: 'Mishra',
                email: '02vineet@gmail.com',
                password: '12345678',
            };

            // Act
            await request(app).post('/auth/register').send(userData);

            // Assert
        });
    }); // HAPPY PATH
    describe('Fields are missing', () => {}); // SAD PATH
});
