import { levenshteinDistance } from '../LevenshteinDistance';

describe('levenshteinDistance', () => {
    it('should calculate edit distance between two strings', () => {
        expect(levenshteinDistance('', '')).toBe(0);
        expect(levenshteinDistance('a', '')).toBe(1);
        expect(levenshteinDistance('', 'a')).toBe(1);
        expect(levenshteinDistance('abc', '')).toBe(3);
        expect(levenshteinDistance('', 'abc')).toBe(3);

        // Should just add I to the beginning.
        expect(levenshteinDistance('igloo', 'gloo')).toBe(1);

        // Should just substitute i with o, m with g and insert e at end
        expect(levenshteinDistance('firm', 'forge')).toBe(3);

        // Should just substitute f with s, g with t and delete h
        expect(levenshteinDistance('fighting', 'sitting')).toBe(3);

        // Should add 4 letters b, a, s and e at the beginning.
        expect(levenshteinDistance('ball', 'baseball')).toBe(4);

        // Should delete 4 letters b, a, s and e at the beginning and replace the last 4 with f, o, o, t
        expect(levenshteinDistance('baseball', 'foot')).toBe(8);
    });
});
