function introduction(inno) {
  return `Hi, my name is ${inno}.`;
}
console.log(introduction("Inno")); 
// Output: Hi, my name is Inno.

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Inno", "python"));
// Output: Hi, my name is Inno and I am learning to program in Python.

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("Inno")); 
// Output: Hi, my name is Inno and I am learning to program in JavaScript.

console.log(introductionWithLanguageOptional("Inno", "Ruby")); 
// Output: Hi, my name is Inno and I am learning to program in Ruby.

