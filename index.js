//Задаача №1

// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr),
// которая вернёт массив уникальных,
// не повторяющихся значений массива arr

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
};

alert(unique(values)); // Hare,Krishna,:-O

//  Задаача №2

//  function volume(l, w, h) {
//      return l * w * h;
//  };
//  вызывается так
//  const aCylinder = volume(100, 20, 90) // 180000
//  console.log(aCylinder);
//  перепишите volume так, что бы
//  const bCylinder = volume(100)(20)(90) // тоже выдал 180000

function volumeC(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
};

const bCylinder = volumeC(100)(20)(90); // 180000
alert(bCylinder);

//Задаача №3

const nullValue = null;
const emptyText = "";
const someNumber = 0;
const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber || 1
const valD = someNumber ?? null

//valA, b, c, d //что будет в консоли проверить себя

// valA   ---> "default for A" 
// valB   ---> "" (emptyText)
// valC   ---> 1
// valD   ---> 0 (someNumber)