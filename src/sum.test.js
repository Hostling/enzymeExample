import { sum } from "./sumHelper";

describe('sum()', () => {
    it('2+2=4', () => {
        //given
        const a = 2;
        const b = 2;
        const expected = 4;

        //when
        const result = sum(a, b);

        //then
        expect(result).toEqual(expected);
    });
});

