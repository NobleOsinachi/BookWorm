import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
  name: "phone",
  pure: true
})
export class PhonePipe implements PipeTransform {
  transform(value: string) {
    if (!value) return null;

    value = value.toUpperCase().replace(/-/g, "")
      .replace(/ /g, "")
      .replace("(", "")
      .replace(/[A-Z]/g, "")
      .replace(")", "")
      ;

    return this.formatPhoneNumber(value);
  }

  formatPhoneNumber = function (value: string) {
    /* +2349025778189
    * 23409025778189
    * +2349025778189
    * 09025778189
    * 9025778189
    */


    if (value.startsWith("0") && value.length == 11) return "+234" + value.substr(1);
    else if (value.startsWith("234")) return "+" + value;
    else if (value.startsWith("2340")) return "+" + value.substr(4);
    else if (value.startsWith("+234")) return "" + value;

    else return "+234" + value.substr(0)
  }








  //len = function (value = "", lenght = 11) {
  //  return false;
  //}
}
