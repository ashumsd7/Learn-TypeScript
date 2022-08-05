// Arrays types
// number[]   for array types
var person = {
    name: "Lovely",
    age: 30,
    hobbies: ['cricket', 'hockey']
};
var favrtSports;
favrtSports = ['sports', 'hockey',];
//any
var favrtFruits;
favrtFruits = [1, 'apple', 23];
for (var _i = 0, favrtSports_1 = favrtSports; _i < favrtSports_1.length; _i++) {
    var sport = favrtSports_1[_i];
    console.log(sport.toUpperCase());
}
console.log(person.name);
