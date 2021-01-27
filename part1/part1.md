1. At line 11, it will print out the length of prices array, because var i still exists as the price.length when it exits the loop as var has no block scope (which also applies to next two questions).
   <br></br>
2. At line 12, it will print out the prices array's last element's discount price. This is because var discountedPrice still exists as the the last element's discount price when it exits the loop.
   <br></br>
3. At line 13, it will print out the prices array's last element's final price, the final price can only have at most two decimal places. This is because line 7 rounds the final price to be at most two decimal places and var finalPrice still exists as the last element's final price in this scope.
   <br></br>
4. It will return an array of [50, 100, 150]. Since the discount is 0.5, the function times (1-0.5) for every element in the array and returns it. Thus, 50% of [100, 200, 300] is [50, 100, 150].
   <br></br>
5. At line 11, compiler returns a ReferenceError because i is not defined and this is because let's scope is only within the for loop block.
   <br></br>
6. Because of the previous ReferenceError, the program will not reach line 12. Even if i is defined and the program reaches line 12, line 12 will still return ReferenceError because discountedPrice is not visible in this scope.
   <br></br>
7. Becuase of the previous ReferenceError, the program will not reach line 13.
   <br></br>
8. Compiler will rutern ReferenceError since i is not defined in line 11.
   <br></br>
9.  The program will not reach line 11. Since finalPrice is const, changing its value will cause a TypeError at line 7.
    <br></br>
10.  The program will not reach line 12. Since finalPrice is const, changing its value will cause a TypeError at line 7.
    <br></br>
11.  The program will not reach line 13. Since finalPrice is const, changing its value will cause a TypeError at line 7.
    <br></br>
12.  Compiler will return TypeError for assigning value to const finalPrice at line 7.
    <br></br>
13.  A. student.name
     B. student['Grad Year']
     C. student.greeting();
     D. student["Favorite Teacher"].name
     E. student.courseLoad[0]
    <br></br>
14.  A. 32 (+ sign is treated as string concatenation since '3' is initially a string) \
     B. 1 (- sign can only stand for substraction, therefore '3' is converted to 3) \
     C. 3 (+ sign is treated as addition since both null can also be represented as numeric 0) \
     D. 3null (+ sign is treated as string concatenation since '3' is initially string) \
     E. 4 (since true is also 1, so + sign is treated as addtion) \
     F. 0 (since false is 0 and null is 0, + sign is treated as addition) \
     G. 3undefined (+ sign is treated as string concatenation as "3" is initially string and undefined is NaN) \
     H. NaN (- sign can only be used for substraction, so string minus NaN is NaN)
     <br></br>
15.  A. true (since '2' becomes 2) \
     B. false (since string '2' is larger than string '1') \
     C. true ('2' is converted to 2) \
     D. false (=== checks equality without type conversion) \
     E. false (true is 1) \
     F. true (Boolean(value) when value is not 0 or NaN or null or undefined becomes true)
    <br></br>
16.  == is equality check with type conversions while === is strict equality check without type conversion
    <br></br>
17.  It prints How are you? because in condition tests a single 2 in the condition is converted to Boolean(2) which is true. Thus 2 == true is false but a single 2 is actually true.
    <br></br>
18.  This is [the link](part1-question18.js) to this problem's js file.
    <br></br>
19.  The returned array will be [6, 8, 10]. In the modifyArray, when calling callback(array[i], function...), it goes to doSomething. Then in doSomething, when calling callback(num +2), it addes 2 to the array's element and goes to function(x) for doubling the element+2. Thus, in the returning array, it double every element plus 2.
    <br></br>
20.  This is [the link](part1-question20.js) to this problem's js file.
    <br></br>
21.  1 4 3 2