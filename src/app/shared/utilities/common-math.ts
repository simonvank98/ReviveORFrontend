export class CommonMath {
    public static roundTo2Decimals(num) {
        return Math.round(num * 100) / 100;
    }

    public static findSumOfNumbers(arrayOfNumbers) {
        return arrayOfNumbers.reduce((acc, val) => acc + val, 0);
    }
}
