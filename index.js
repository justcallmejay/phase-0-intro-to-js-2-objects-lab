const employee =
{
    name: "Sam",
};

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee
// };

// updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employees = {...employee};
    employees[key] = value;
    return employees
}

updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

function deleteFromEmployeeByKey(employee, key) {
    let employees = {...employee}
    delete employees[key]
    return employees
}

deleteFromEmployeeByKey(employee, "streetAddress")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")