//------Chapter 17-20---------//

// // 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}


// // 4. Write a program to print multiplication table of any number using for loop. Table number 
// // & length should be taken as an input from user.
var tableNo = +prompt("Enter a number to shows its multiplication table");
var tableLength = +prompt("Enter length of multiplication table");
document.write("Multiplication table of " + tableNo + " Length " + tableLength + "<br><br>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNo + " X " + i + " = " + (tableNo * i) + "<br>");
}


// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ["apple", "babana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}


// // 6. Generate the following series in your browser. See 
// // example output.

// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h1> Counting </h1>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h1> Reverse Counting </h1>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h1> Even: </h1>");
for (var i = 0; i <= 20; i+=2) {
    document.write(i + ", ");
}

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h1> Odd: </h1>");
for (var i = 1; i <= 19; i+=2) {
    document.write(i + ", ");
}

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h1> Even: </h1>");
for (var i = 2; i <= 20; i+=2) {
    document.write(i + "K, ");
}

// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an 
// // array.
// // After searching, prompt the user whether the given item is
// // found in the list or not. Example:
var menu = ["cake", "apple pie", "cookie", "chips", "patties"];
var ques = prompt("Welcome to United King: What do you want to order Sir/Ma'am?");
var flag = true;
for (var i = 0; i < menu.length; i++) {
    if (ques === menu[i]) {
        document.write(ques + " is available at index " + i + " in our bakery");
        flag = false;
    } 
}
if (flag === true) {
        document.write("We are sorry. " + ques + " is not available in our bakery");
}


// // 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12];
var big = 0;
for (var i = 0; i < A.length; i++) {
    if (A[i] > big)  {
        big = A[i];
    }
    // document.write(big + "<br>");
}
document.write("The largest number is: " + big + "<br>");


// // 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
var big = 0;
for (var i = 0; i < A.length; i++) {
    if ((A[i] < big) || i === 0) {
        big = A[i]; 
    }
}
document.write("The smallest number is: " + big + "<br>");


// // 10. Write a program to print multiples of 5 ranging 1 to 100.
for (var i = 5; i <= 100; i+=5) {
    document.write(i + ", ");
}