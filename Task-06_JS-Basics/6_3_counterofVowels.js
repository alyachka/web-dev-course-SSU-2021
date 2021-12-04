console.log("Задание 6.3. – Подсчёт гласных");

function counter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(letter => vowels.includes(letter.toLowerCase())).length;
}

console.log(counter('abracadabra'));
console.log(counter('ABRACADABRA'));
console.log(counter('o do novogo goda sovsem chut chut'));
console.log(counter('my dog'));