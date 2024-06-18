// calculator.mjs

export function evaluateParentheses(expr) {
    while (expr.includes('(')) {
        expr = expr.replace(/\([^()]*\)/g, function(subExpr) {
            return evaluateBasicExpression(subExpr.slice(1, -1));
        });
    }
    return evaluateBasicExpression(expr);
}

export function evaluateBasicExpression(expr) {
    expr = expr.replace(/\s+/g, ''); // Remove white spaces

    // Evaluate multiplication and division first
    let parts = expr.split(/([+\-])/); // Split at + and -
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes('*') || parts[i].includes('/')) {
            let subParts = parts[i].split(/(\*|\/)/); // Split at * and /
            for (let j = 1; j < subParts.length; j += 2) {
                let left = parseFloat(subParts[j - 1]);
                let operator = subParts[j];
                let right = parseFloat(subParts[j + 1]);
                let result;
                if (operator === '*') {
                    result = left * right;
                } else if (operator === '/') {
                    result = left / right;
                }
                subParts.splice(j - 1, 3, result.toString());
                j -= 2;
            }
            parts[i] = subParts[0];
        }
    }

    // Evaluate addition and subtraction
    let result = parseFloat(parts[0]); // Start with the first number
    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let nextValue = parseFloat(parts[i + 1]);
        if (operator === '+') {
            result += nextValue;
        } else if (operator === '-') {
            result -= nextValue;
        }
    }

    return result;
}

export function calculate(expression) {
    try {
        return evaluateParentheses(expression);
    } catch (e) {
        return "Ungültiger Ausdruck"; // Return an error message if the expression is invalid
    }
}
