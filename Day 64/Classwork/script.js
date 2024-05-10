// let courses = new Array("HTML", "CSS", "JavaScript");
// // or let courses = ["HTML", "CSS", "JavaScript"]

// console.log(courses);
// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);

// for (let i = 0; i < courses.length; i++){
//     console.log(courses[i])
// }

// courses.push("Python")
// console.log(courses)
// courses.pop()
// console.log(courses)

// courses.splice(0, 2)

// console.log(courses)

const form = document.getElementById('form');

const accounts = [];

const Account = function(userName, userGmail, password, repeatPassword){
    this.userName = userName;
    this.userGmail = userGmail;
    this.password = password;
    this.repeatPassword = repeatPassword;
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const userNameValue = form.elements.username.value;
    const userGmailValue = form.elements.usergmail.value;
    const userPasswordValue = form.elements.userpassword.value;
    const userRepeatPasswordValue = form.elements.repeatuserpassword.value;

    if (userPasswordValue === userRepeatPasswordValue){
        const account = new Account(userNameValue, userGmailValue, userPasswordValue, userRepeatPasswordValue)
        accounts.push(account)
        console.log(accounts)
    } else {
        console.log("Passwords doesn't match")
    }
});