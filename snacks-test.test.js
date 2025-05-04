const { getInitials } = require('./snacks-func');


// SNACK 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('John Doe')).toBe('JD');
})