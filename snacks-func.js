// SNACK 1
function getInitials(name) {
    const [nome, cognome] = name.split(' ').filter(c => c !== '');
    return `${nome.at().toUpperCase()}${cognome.at().toUpperCase()}`
}

// SNACK 2
function createSlug(name) {

    const slug = name.split(' ').join('-').toLowerCase();

    if (slug === '') {
        throw new Error('Non può essere vuoto')

    } else if (typeof slug !== 'string') {
        throw new Error('Deve essere una stringa')

    } else if (!slug) {
        throw new Error('Non valido')
    }

    return slug
}

// SNACK 3
function average(arr) {

    arr.forEach((n) => {
        if (isNaN(n)) {
            throw new Error('Accetta solo numeri')
        }
    })

    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length
}

//  SNACK 5
function isPalindrome(word) {
    const revert = word.split('').reverse().join('').toLowerCase();

    if (revert === word.toLowerCase())
        return revert
    else if (word !== String || revert !== word.toLowerCase()) throw new Error('Non compatibile')
}

//  SNACK 7
function findPostById(posts, id) {

    const e = posts.find(p => p.id === id);

    const slug = e.title.split(' ').join('-').toLowerCase();

    if (
        !isNaN(e.id) &&
        typeof e.title === 'string' &&
        typeof e.slug === 'string' && e.slug === slug) {

        return e
    }
    else if (isNaN(e.id)) throw new Error('Il campo deve essere numerico')
    else if (typeof e.title !== 'string') throw new Error('Il campo deve essere una stringa')
    else if (typeof e.slug !== 'string' || e.slug !== slug) throw new Error('Il campo deve essere uguale al title')

}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}