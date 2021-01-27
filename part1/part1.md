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