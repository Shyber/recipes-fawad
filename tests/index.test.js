  
const fullName = (firstName, lastName) => `Hey ${firstName} ${lastName}, this is your first test using Jest!`;

describe('Testing the tests setup', () => {
    it('Should return the full name', () => {
        const result = `Hey Fawad Ahmed, this is your first test using Jest!`;
        expect(fullName("Fawad", "Ahmed")).toBe(result);
    });
});