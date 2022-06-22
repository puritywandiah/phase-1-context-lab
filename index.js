/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    // Here we are destructuring the array
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  function createEmployeeRecords(arrayOfEmployees) {
    // Here we take array of Employees, and call createEmployeeRecors
    // on each array element.
    // console.log("ARRAY", arrayOfEmployees.map(createEmployeeRecord))
    return arrayOfEmployees.map(createEmployeeRecord)
  }
  
  function createTimeEvent(date, type) {
    let timeEvent = {
      type: type,
      hour: parseInt(`${date.substr(11)}`),
      date: date.substr(0, 10)
    }
    // dynamically creating variables + pushing item in array
    let lowercaseType = type[0].toLowerCase() + type.slice(1)
    eval("this" + "." + lowercaseType + "Events").push(timeEvent)
    return this
  }
  
  function createTimeInEvent(date) {
    let timeInEvent = createTimeEvent.bind(this)
    timeInEvent(date, 'TimeIn')
    // console.log("CreateTimeIn", this)
    return this
  }
  
  function createTimeOutEvent(date) {
    createTimeEvent.call(this, date, 'TimeOut')
    return this
  }
  
  function hoursWorkedOnDate(date) {
    //search in employee record array for Time In and Time Out matching the dates
    // subsctract
  
    let timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    let timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    return (timeOut.hour - timeIn.hour) / 100
  }
  
  function wagesEarnedOnDate(date) {
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
  }
