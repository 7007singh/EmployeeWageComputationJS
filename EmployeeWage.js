console.log("Welcome to employee wage computation program")

//const IS_PRESENT = 1
const FULL_TIME = 1
const PART_TIME = 2;
const EMP_RATE_PER_HRS = 20
const MAX_WORKING_DAYS = 20
let empHrs = 0, empWage = 0, totalWage = 0;

function getWorkingHrs(empStatus) {
    switch (empStatus) {
        case FULL_TIME:
            empHrs = 8;
            return PART_TIME
        case PART_TIME:
            empHrs = 4;
            return FULL_TIME
        default:
            return empHrs

    }
}
for(let day = 0; day < MAX_WORKING_DAYS; day++){
    let empStatus = Math.floor(Math.random() * 10) % 3;
    empWage += getWorkingHrs(empStatus)
    empWage = EMP_RATE_PER_HRS*empHrs
    totalWage += empWage
}
console.log("Employee wage: " + totalWage )
