//     Create a PostIt a class that has
//     a backgroundColor
//     a text on it
//     a textColor
// Create a few example post-it objects:
//     an orange with blue text: "Idea 1"
//     a pink with black text: "Awesome"
//     a yellow with green text: "Superb!"

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backGroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backGroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  printPostIt(): void {
    console.log(this.backgroundColor, this.text, this.textColor);
  }
}

const Idea1 = new PostIt('orange', 'Idea 1', 'blue');
const Awesome = new PostIt('pink', 'Awesome', 'black');
const Superb = new PostIt('yellow', 'Superb', 'green');
Idea1.printPostIt();
