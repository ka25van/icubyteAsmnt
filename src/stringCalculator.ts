export function add(numbers: string): number {
    if (numbers === "") return 0;

    const delimiterRegex = /\/\/(.*?)\n/;
    let delimiter = /[,\n]/;
    let numberString = numbers;

    const match = numbers.match(delimiterRegex);
    if (match) {
        delimiter = new RegExp(match[1]); 
        numberString = numbers.slice(match[0].length);
    }

    const numberArray = numberString.split(delimiter);
    const negatives: number[] = [];

    const sum = numberArray.reduce((acc, num) => {
        const n = parseInt(num, 10);
        if (n < 0) negatives.push(n);
        return acc + n;
    }, 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return sum;
}
