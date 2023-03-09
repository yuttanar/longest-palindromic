import longestPalindromic from "./longest-palindromic"
import * as readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input:', (s) => {
    const longest = longestPalindromic(s)
    console.log("Output:",longest)
    rl.close();
});


