// Function Declaration
function calculateAreaDecl(width, height) {
    return width * height;
}

// Function Expression
const calculateAreaExpr = function(width, height) {
    return width * height;
};

// Arrow Function
const calculateAreaArrow = (width, height) => width * height;

const width = 13;
const height = 26;

console.log("Function Declaration:", calculateAreaDecl(width, height));
console.log("Function Expression:", calculateAreaExpr(width, height));
console.log("Arrow Function:", calculateAreaArrow(width, height));
