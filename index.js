// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue (employee, key, value){

    //Via Object.assign()
    return Object.assign({}, employee, {[key]: value})

    /** Via Spread Operator 
     * 
     * const newObj = { ... employee }
     * newObj[key] = value;
     * return newObj
     * 
     * */ 

}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value

    return employee
}

const deleteFromEmployeeByKey = function (employee, key){
    const newEmployee = {... employee.key}
    
    delete {... employee.key}

    return newEmployee
}
 const destructivelyDeleteFromEmployeeByKey = function (employee, key){

    delete employee[key]

    
    // const newEmployee = delete {... employee.key}


     return employee
}


