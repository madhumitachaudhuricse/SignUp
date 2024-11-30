// Function for login
function login(userName, password) {
    const registeredUsers = ['john', 'alice', 'bob']; 

    if (!registeredUsers.includes(userName)) {
        return 'User Not Found, Please Signup';
    } else if (password === 'Emp@123') {
        return 'Login Successful...';
    } else {
        return 'Wrong Password...';
    }
}


console.log(login('john', 'Emp@123')); 
console.log(login('john', 'wrongPass')); 
console.log(login('mike', 'Emp@123')); 
