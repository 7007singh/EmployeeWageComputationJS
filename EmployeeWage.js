console.log("Welcome to employee wage computation program")

//const IS_PRESENT = 1
const FULL_TIME = 1
const PART_TIME = 2;
const EMP_RATE_PER_HRS = 20
let empHrs =0, empWage = 0;
let empStatus = Math.floor(Math.random()*10)%3;  
 
switch(empStatus)
{
    case FULL_TIME:
        empHrs = 8;
        console.log("Employee is present full time")
        break
        case PART_TIME:
            empHrs = 4;
            console.log("Employee is present half time")
            break
            default:
                console.log("Employee is absent")
                break

}
empWage = empHrs*EMP_RATE_PER_HRS
console.log("Employee wage: " + empWage)