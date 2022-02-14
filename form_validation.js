let studentName = studentName.value
let gpa = studentGPA.value
let id = studentID.value

//Make an empty 'errors' array
let errors = []

//Add error message to errors array if name is empty
if (!studentName) {
    errors.push('Enter student name')
}

//Add error message to errors array if id is empty
if (!id) {
    errors.push('Enter student ID')
}

//Add error message to errors array if gpa is empty or not between 0 and 4
if (!gpa || gpa < 0 || gpa > 4) {
    errors.push('Enter GPA between 0 and 4')
}

//If there are any errors in the errors list, show an alert with each error message.
if (errors.length > 0) {
    let errorMsg = errors.join('\n') // '\n' makes a new line
    alert(errorMsg)
    return
}