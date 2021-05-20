export class Utils {
  public static MapEnumToArray = (enumeration: any) => Object.keys(enumeration)
    .filter(Utils.StringIsNumber)
    .map(key => enumeration[key])

  private static StringIsNumber = (value: any) => !isNaN(Number(value));
}
