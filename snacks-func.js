// SNACK 1
function getInitials(name) {
    const [nome, cognome] = name.split(' ').filter(c => c !== '');
    return `${nome.at().toUpperCase()}${cognome.at().toUpperCase()}`
}

// SNACK 2
function createSlug(name) {
    const slug = name.split(' ').join('-')
    return slug.toLowerCase()
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

module.exports = {
    getInitials,
    createSlug,
    average
}