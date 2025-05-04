const {
    getInitials,
    createSlug
} = require('./snacks-func');


// SNACK 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('John Doe')).toBe('JD');
})


// SNACK 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('JOHN DOE')).toBe('john doe');
})