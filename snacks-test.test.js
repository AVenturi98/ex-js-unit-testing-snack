const {
    getInitials,
    createSlug,
    average,
    isPalindrome
} = require('./snacks-func');


// SNACK 1
test("La funzione 'getInitials' restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('John Doe')).toBe('JD');
})


// SNACK 2
test("La funzione 'createSlug' restituisce una stringa in lowercase.", () => {
    expect(createSlug('JOHN DOE')).toBe('john-doe');
})


// SNACK 3
test("La funzione 'average' calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(() => average([1, ' numero'])).toThrow();
})

// SNACK 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug('Tutto AttAccato da MeNo')).toBe('tutto-attaccato-da-meno');
})

// SNACK 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('Anna')).toBe('anna');
    expect(isPalindrome('LeveL')).toBe('level');
    expect(() => isPalindrome('Casa')).toThrow();
})

// SNACK 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug('')).toThrow();
    expect(() => createSlug(2)).toThrow();
})