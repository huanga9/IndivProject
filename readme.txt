Angela Huang
Software Engineering 
Assignment 5

Project Name: The Roommate Application 

Private GitHub Repository: https://github.com/huanga9/IndivProject

The website can be accessed and tested here: http://172.16.100.44/IndivProject/View/

Fucntionality Implemented:
Currently, a user is able to log into the system given that their username and passwords match and correspond to a person 
in the system.
A user will also be able to try to create an account given valid input, although the information is not currently stored in any
database. 
Once the user logs in successfully, he or she will be able to rank chores based on their difficulty level. 
The values of the chores will then be appended to an empty array since the size of the array is unknown (the user will have the 
option of leaving a chore blank if it does not apply to his/her living situation). A corresponding array is also allocated to keep
track of the corresponding chore for each value in the array in order for the right chore to be assigned in the end. The arrays 
are then simultaneously sorted with a quickSort algorithm, and paritioned based the values in the array containing the rankings.
After the algorithms run, the two sets are then displayed on the screen, demonstrating the chore assignments for each roommate. 

There are currently no known bugs; however, limitations of the project do exist. 
Limiations include the fact that the system currently only supports one user. 
Future work will include allowing multiple users to access the site, create user groups, and rank chores based on multiple rankings. 
Additionally, once the site is able to support more than one user, the notifications and feedback pages would be more useful. 
