const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];


const total = names.reduce((count, name) => {
    if (name[0] === 'G') {
        return count + 1;
    } 
    return count;
}, 0);

console.log(total);
    // Result: 4