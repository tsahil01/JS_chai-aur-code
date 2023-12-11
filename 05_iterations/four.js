const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python"
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`);
}

const prog = ["js", "rb", "cpp", "java"]

for (const i in prog) { // i gives the array keys(position)
    // console.log(i);
    console.log(prog[i]);
}