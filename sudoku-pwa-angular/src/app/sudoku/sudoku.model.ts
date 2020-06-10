

const generateSudoku = () => {
    const randomNumber = (except: number[]) => {
        let N = Math.round(Math.random() * 9);
        for (let i = 0; i < 10; ++i) {
            if (except.includes(N)) {
                ++N;
                N = N % 9 + 1;
            }
        }
        return N;
    };
    const getImpossibleNumbers = (i, j, field2) => {
        const impossibleNumbers = [];
        for (let i2 = 0; i2 < 9; ++i2) {
            impossibleNumbers.push(field2[i][i2]);
            impossibleNumbers.push(field2[i2][j]);
        }
        return impossibleNumbers;
    };
    const field = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            field[i][j] = randomNumber(getImpossibleNumbers(i, j, field));
        }
    }
    return field;
};

export const sudokuField = generateSudoku();
