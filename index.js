const student = {
    name: 'Azem', // key - name, velue - 'Azem'
    age: '18',
    gender: 'female',
    marks: [10, 10, 10, 8, 5],
    isJsDev: true,
};

// console.log(student.gender);
// console.log(student['gender']);
// console.log(student.marks[4]);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// const newAge =  (student.age = '16');
// console.log(newAge);


const students = [
    {
        name: 'Azem', // key - name, velue - 'Azem'
        age: '18',
        gender: 'female',
        marks: [10, 10, 10, 8, 5],
        isJsDev: true,
    },
    {
        name: 'Dauren', // key - name, velue - 'Azem'
        age: '13',
        gender: 'male',
        marks: [10, 10, 6, 8, 5],
        isJsDev: true,
    },
    {
        name: 'Sumaya', // key - name, velue - 'Azem'
        age: '16',
        gender: 'female',
        marks: [5, 10, 10, 10, 10],
        isJsDev: true,
    },
    {
        name: 'Nurjigit', // key - name, velue - 'Azem'
        age: '15',
        gender: 'male',
        marks: [2, 3, 10, 10, 4],
        isJsDev: true,
    },
];
// console.log(students);

// for(let i = 0; i< students.length; i++ ){
//     console.log('valus:' + students[i].name);
// }

// for(const item in students ){ //bul metotto biz index menen znachenie chygara alabyz
//     console.log(students[item]);
// }

// for (const item of students ) {//bul metotto biz index menen znachenie chygara alabyz
//     console.log(item);
// }


let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}