export class ServiceDate {
  static parseDateInString(date: Date) {
    const result = [
      date.getFullYear(),
      this.parseNumber(date.getMonth() + 1),
      this.parseNumber(date.getDate()),
    ];

    return result.join("-");
  }

  static convertDateRu(dateString: string) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // @ts-ignore
    return date.toLocaleString("ru", options);
  }

  private static parseNumber(number: number) {
    return number < 10 ? "0" + number : number;
  }
}
