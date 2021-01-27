# Part 3 Debugging using the DevTools

## Debug using breakpoints

This is an image showing the breakpoints I added. ![Breakpoints](initialBreakpoints.png "List of break points") 
I basiclly added breakpoints on every line that involves changing variables and calling functions.
<br></br>

The following is an image showing the values and types of num1, num2, and result.
![Type](resultType.png "Showing values and types")
We can clearly see that num1 is "1", num2 is "2", and result is "12", which are all strings.
<br></br>

The bug is that num1 and num2 are stored as strings so that num1 + num2 is also concatenated as strings.

<br></br>
To fix this bug, we just need to store num1 and num2 as numbers. So adding Numbers() around num1 and num2 should fix the bug. The fix is shown in the following image. ![Fix](fixBug.png "Add Number")