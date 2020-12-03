## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

### Array.forEach
With the forEach method you can iterate an array of objects. This is helpful when you want to pick out certain objects. You can also update the value of objects. It will be return in the same order as the array is in.


```
<script>
let pets = ["dogs", "cats", "hamsters", "rabbits"];
pets.forEach(myPets);

function myPets(item, index) {
  document.getElementById("").innerHTML += "I love " + item + "<br>";

  console.log(pets);
}
</script>
```
The code will give the following output:

```
I love dogs
I love cats
I love hamsters
I love rabbits
````

### Array.map 
With map you take an existing array and and then pass a function to map this array and the map function replaces the original values  with the values that was created.

```
const numbers = [1, 2, 3, 4];

const map1 = numbers.map(x => x +1);

console.log(map1)

```
the output will be:
2, 3, 4, 5

### Array.filter
The filter method will give a new array with the same values if the iterator function returns true. 

```
const numbers [1, 2, 3, 4]
const result = numbers.filter(item => item > 3)
console.log(result)
```
Result here will be: [4]
We look if the any value in the array is bigger than three and that is in this case true

### .find
Find will return the first value in the array that get true

```
const pets [{ id: 1, pet: 'cat' }, {id: 2, pet: 'dog}]
const pets = pets.find(item => item.id === 1)
console.log(pets)
```
Here we will print cat.
