import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: "title" })
export class TitlePipe implements PipeTransform {
  transform(value: string) {
    if (!value) return null; let words = value.split(" ");

    for (var i = 0; i < words.length; i++) {
       let word = words[i];

      if (i > 0 && this.isPreposition(word))
        words[i] = word.toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }
    return words.join(" ");
  }

  isPreposition/*= function*/(word = ""): boolean {
    let prepositions = ["the", "of"];
    return prepositions.includes(word.toLowerCase());

  }

  toTitleCase = function (word: string): string{
    return word.substr(0, 1).toUpperCase()
      + word.substr(1).toLowerCase();;
  }

}
