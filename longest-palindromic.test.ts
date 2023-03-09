import longestPalindromic from './longest-palindromic'

describe('longest palindrome', () => {

    it('should return itself when length of s is 1',  () => {
        const s = "a";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('a')
    })

    it('should return s[0] when length of s is 2 and s[0] not equal to s[1]',  () => {
        const s = "ab";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('a')
    })

    it('should return itself when length of s is 2 and s[0] equal to s[1]',  () => {
        const s = "aa";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('aa')
    })


    it('should return aba when s is babad',  () => {
        const s = "babad";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('aba')
    })

    it('should return aba when s is babad',  () => {
        const s = "cbbd";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('bb')
    })

    it('should return maximum length of s when length morethan 1000',  () => {
        const s = new Array(1002).join("a");

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('the maximum length of string s is 1000')
    })

    it('should return empty when length of s is 0',  () => {
        const s = "";

        const longest = longestPalindromic(s)
        
        expect(longest).toEqual('You input is empty , Please try again')
    })
})