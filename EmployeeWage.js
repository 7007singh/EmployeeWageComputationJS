console.log("Welcome to employee wage computation program")

//const IS_PRESENT = 1
const FULL_TIME = 1
const PART_TIME = 2;
const EMP_RATE_PER_HRS = 20
let empHrs = 0, empWage = 0;
let empStatus = Math.floor(Math.random() * 10) % 3;

function getWorkingHrs(empStatus) {
    switch (empStatus) {
        case FULL_TIME:
            empHrs = 8;
            return PART_TIME
        case PART_TIME:
            empHrs = 4;
            return FULL_TIME
        default:
            console.log("Employee is absent")
            return empHrs

    }
}
empHrs = getWorkingHrs(empStatus)
empWage = EMP_RATE_PER_HRS * empHrs
console.log("Employee wage: " + empWage)