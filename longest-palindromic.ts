function longestPalindromic(s) {
    const lengthOfString = s.length;
    let longestLength = 1;
    let start = 0;

    if (lengthOfString == 0) {
        return "You input is empty , Please try again";
    }

    if (lengthOfString > 1000) {
        return "the maximum length of string s is 1000";
    }

    // Initialize table & Check substrings with one character are palindromic
    let table = new Array(lengthOfString);
    for (let i = 0; i < lengthOfString; i++) {
        table[i] = new Array(lengthOfString).fill(false);
        table[i][i] = true;
    }

    // Check that the two adjacent characters that are equal are palindromic
    for (let i = 0; i < lengthOfString - 1; i++) {
        if (s[i] === s[i + 1]) {
            table[i][i + 1] = true;
            longestLength = 2;
            start = i;
        }
    }

    // Check for substrings of length greater than 3: boundary characters must be equal, and a non-boundary substring should be a palindrome.
    for (let lengthOfSubstring = 3; lengthOfSubstring <= lengthOfString; lengthOfSubstring++) {
        for (let i = 0; i < lengthOfString - lengthOfSubstring + 1; i++) {
            let j = i + lengthOfSubstring - 1;
            if (s[i] === s[j] && table[i + 1][j - 1]) {
                table[i][j] = true;
                longestLength = lengthOfSubstring;
                start = i;
            }
        }
    }
    return s.substring(start, start + longestLength);
}

export default longestPalindromic;