import readline from 'readline';
import { calculate } from './calculator.mjs';

// Set up readline interface for reading user input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Was wollen Sie rechnen: ', (expression) => {
    const result = calculate(expression); 
    console.log(`Ergebnis: ${result}`); 
    rl.close(); 
});
