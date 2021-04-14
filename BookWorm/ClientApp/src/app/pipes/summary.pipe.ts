import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "summary",
  pure: true
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number) {

    let actualLimit: number = (limit) ? limit : 50;
    return (!value) ? null : value.substr(0, actualLimit) + "...";
  }
}


