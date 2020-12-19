function greaterNum(x, y) {
    if (x > y) {
        return x;
    } else if ( x == y) {
        return "They are equal"
    } else {
        return y;
    }
}

console.log(greaterNum(2, 1));
console.log(greaterNum(2, 2));
console.log(greaterNum(2, 3));

function helloWorld(lang) {
    if (lang == "ka") {
        return "გამარჯობა, სამყარო";
    } else if (lang == "en") {
        return "Hello, world"
    } else if (lang === undefined) {
        return "Hello, World"
    }
}

console.log(helloWorld("ka"));
console.log(helloWorld("en"));
console.log(helloWorld());

let grades = new Map();

grades['5'] = 'A';
grades['4'] = 'B';
grades['3'] = 'C';
grades['2'] = 'D';
grades['1'] = 'F';

function assignGrade(int) {
    return grades[int.toString()];
}

console.log(assignGrade(3));
console.log(assignGrade(5));