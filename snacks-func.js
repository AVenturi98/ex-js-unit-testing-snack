// SNACK 1
function getInitials(name) {
    const [nome, cognome] = name.split(' ').filter(c => c !== '');
    return `${nome.at().toUpperCase()}${cognome.at().toUpperCase()}`
}

module.exports = { getInitials }