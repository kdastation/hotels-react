export class Utils {
  static createArrayFromNumber(minNumber: number, maxNumber: number): number[] {
    const result = [];
    for (let i = minNumber; i < maxNumber; i++) {
      result.push(i);
    }
    return result;
  }
}
