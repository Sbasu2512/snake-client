const IP = '135.23.222.131';
const PORT = 50542;
const char = 'utf-8';
const exit = '\u0003';
const w = '\u0077';
const a = '\u0061';
const s = '\u0073';
const d = '\u0064';
const up = '\u2191';
const down = '\u2193';
const left = '\u2190';
const right = '\u2192';
const hey = "\u0031"; //num 1
const wyd = "\u0032"; //num 2
const bye = "\u0033"; //num 3
const yolo = "\u0034"; //num 4
const brb = "\u0035"; //num 5

module.exports = {
  IP,
  PORT,
  char,
  exit,
  w,
  s,
  a,
  d,
  up,
  down,
  left,
  right,
  hey,
  bye,
  wyd,
  yolo,
  brb
};

/*
This seems like a mapping that's perfect for an object ({ x: "y" })
Instead of using if statements to implement this, you can define an object (as a constant) which defines these message mappings. Your logic would change to simply lookup the appropriate mapping in the object, and if found, send the value as the message string
*/