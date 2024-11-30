// Function for signup
function signup(userName) {
    const registeredUsers = ['john', 'alice', 'bob']; 

    if (registeredUsers.includes(userName)) {
        return 'User Already Registered, Please Login';
    } else {
        registeredUsers.push(userName);
        return 'Signup Successful, Please Login';
    }
}


console.log(signup('john')); 
console.log(signup('mike')); 
