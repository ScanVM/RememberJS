function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const incrementar = contador();
console.log(incrementar()); // 1
console.log(incrementar()); // 2
