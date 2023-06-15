export const counterNum = num => {
    if (num) num += 1;
    if (num instanceof Array) return false;
    // fucntion expretions
    return num;
};
