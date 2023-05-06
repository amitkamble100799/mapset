// Q1-
var str = "abcadeecfb";
var a= new Set(str);
console.log(...a);

// Q2-
var str = "abcadeecfb";
const ab = new Map();
for (var alphabet of str) {
  if (ab.has(alphabet)) {
 ab.set(alphabet,ab.get(alphabet) + 1);
  } else {
    ab.set(alphabet, 1);
  }
}
console.log(ab);