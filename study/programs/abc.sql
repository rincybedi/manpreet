Employee: EID, EmployeeName 
Project: PID, ProjectName 
Allocation: AID, EID, PID 
 
 
Return all the employees name and total number of projects allocated to that employee

select EmployeeName, count()
from Employee E
left join Allocation A on A.EID = E.EID
group by EmployeeName;




addUser(name, email, userTimestamp)
if(userTimestamp){
  dbOpe()
}
