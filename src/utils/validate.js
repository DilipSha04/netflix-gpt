export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-z A-Z]+$/.test(name)

    if(!isEmailValid) return "*Email ID is Not Valid";
    if(!isPasswordValid) return "*Password is not Valid";
    if(isNameValid.length <= 3) return "*Enter Valid Name"

    return(null)
};


