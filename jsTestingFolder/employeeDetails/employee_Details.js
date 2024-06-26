const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

 // Function to display all employees
 const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
 document.getElementById('employeesDetails').innerHTML = totalEmployees;

 const totalSalaries = employee.reduce((acc, employee) => acc + employee.salary, 0);
 alert('total salaries : $${totalSalaries}');

 function displayHREmployees(){
    const hrEmployees = employee.filter(employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
 }

 function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee){
        document.getElementById('employeeDetails').innerHTML = '<p>${foundEmployee.id} :$ {foundEmployee.name} - ${foundEmployee.department} -$${{foundEmployee.salary}</p> ';
    }
    else{
        document.getElementById('employeeDetails').innerHTML = 'NO EMPLOYEE FOUND FUCKER';
    }
 }