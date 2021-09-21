const sentence = "hello there from lighthouse labs";
const modifiedSentence = sentence + "\n";

let counter = 0;

for (const char of modifiedSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, counter); 
  counter += 50;
}