const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPost,
    removePost
} = require('./snacks-func');


describe('STRINGHE', () => {
    // SNACK 1
    test("La funzione 'getInitials' restituisce le iniziali di un nome completo.", () => {
        expect(getInitials('John Doe')).toBe('JD');
    })


    // SNACK 5
    test("La funzione 'isPalindrome' verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome('Anna')).toBe('anna');
        expect(isPalindrome('LeveL')).toBe('level');
        expect(() => isPalindrome('Casa')).toThrow();
    })
})

describe('SLUG', () => {

    // SNACK 2
    test("La funzione 'createSlug' restituisce una stringa in lowercase.", () => {
        expect(createSlug('JOHN DOE')).toBe('john-doe');
    })

    // SNACK 4
    test("La funzione 'createSlug' sostituisce gli spazi con -.", () => {
        expect(createSlug('Tutto AttAccato da MeNo')).toBe('tutto-attaccato-da-meno');
    })

    // SNACK 6
    test("La funzione 'createSlug' lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug('')).toThrow();
        expect(() => createSlug(2)).toThrow();
    })


})

describe('ARRAY', () => {

    let posts;

    beforeEach(() => {
        posts = [
            { id: 1, title: 'Torta al cioccolato', slug: 'torta-al-cioccolato' },
            { id: 2, title: 'Tiramisù con caffè', slug: 'tiramisù-con-caffè' },
            { id: 3, title: 'Torta alle mele', slug: 'torta-alle-mele' },
            { id: 4, title: 4, slug: 'torta-alle-mele' },
            { id: 5, title: 'Pappassini', slug: 5 },
            { id: 6, title: 'Pappassini', slug: 'torta-alle-mele' }
        ];
    })

    afterEach(() => {
        posts = [];
    })

    // SNACK 3
    test("La funzione 'average' calcola la media aritmetica di un array di numeri.", () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
        expect(() => average([1, ' numero'])).toThrow();
    })

    // SNACK 7
    test("La funzione 'findPostById' restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Torta al cioccolato', slug: 'torta-al-cioccolato' });
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: 'Tiramisù con caffè', slug: 'tiramisù-con-caffè' });
        expect(() => findPostById(posts, 'numero')).toThrow(); // ID passato come parametro è una stringa
        expect(() => findPostById(posts, 4)).toThrow(); // title è un numero
        expect(() => findPostById(posts, 5)).toThrow(); // slug è un numero
        expect(() => findPostById(posts, 6)).toThrow(); // slug è diverso
    })
})


// SNACK 8 (bonus)
describe('Aggiungere - Rimuovere un post', () => {

    let posts;

    beforeEach(() => {
        posts = [
            { id: 1, title: 'Torta al cioccolato', slug: 'torta-al-cioccolato' },
            { id: 2, title: 'Tiramisù con caffè', slug: 'tiramisù-con-caffè' },
            { id: 3, title: 'Torta alle mele', slug: 'torta-alle-mele' },
            { id: 4, title: 4, slug: 'torta-alle-mele' },
            { id: 5, title: 'Pappassini', slug: 5 },
            { id: 6, title: 'Pappassini', slug: 'torta-alle-mele' }
        ]
    })

    afterEach(() => {
        posts = [];
    })

    // ADD
    test("Dopo aver aggiunto un post con la funzione 'addPost', l'array posts deve contenere un elemento in più.", () => {
        expect(addPost(posts, { id: 7, title: 'Biscotti con Uvetta', slug: 'biscotti-con-uvetta' }));
        expect(posts).toHaveLength(7)
    })

    // REMOVE
    test("Dopo aver rimosso un post con la funzione 'removePost', l'array posts deve contenere un elemento in meno.", () => {
        expect(removePost(posts, 7));
        expect(posts.find(p => p.id === 7)).toBeUndefined()
    })
})