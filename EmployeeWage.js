console.log("Welcome to employee wage computation program")

//const IS_PRESENT = 1
const FULL_TIME = 1
const PART_TIME = 2;
const EMP_RATE_PER_HRS = 20
const MAX_WORKING_DAYS = 20
const MAX_WORKING_HRS = 160
let empHrs = 0, empWage = 0, totalWage = 0, workingDays = 0;

function getWorkingHrs(empStatus) {
    switch (empStatus) {
        case FULL_TIME:
            empHrs = 8;
            return empHrs
        case PART_TIME:
            empHrs = 4; 
            return empHrs
        default:
            return 0
    }
}

while(empHrs <= MAX_WORKING_HRS && workingDays < MAX_WORKING_DAYS){
    workingDays++
    let empStatus = Math.floor(Math.random() * 10) % 3
    empHrs += getWorkingHrs(empStatus)
}
empWage = EMP_RATE_PER_HRS*empHrs
totalWage += empWage
console.log("Employee wage: " + totalWage + " total hours: " + empHrs + " total days: " + workingDays)