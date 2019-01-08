const validateForm =(input)=>{
    var errorArray =[];
    console.log(input);
    let keys = Object.keys(input);
    keys.forEach((key) => {
        if(key.toLowerCase().includes('mail')){
            if(!validateMail(input[key])){
                errorArray.push({key: key, errorText: "invalid email", status: true})
            }
        }
        if(key.toLowerCase().includes('name')){
            if(!input[key]){
                errorArray.push({key: key, errorText: "should not empty", status: true})
            }
        }
        if(key.toLowerCase().includes('password')){
            if(!input[key]){
                errorArray.push({key: key, errorText: "should not empty", status: true})
            }
        }
        if(keys.indexOf('password')>=0 && keys.indexOf('confirmPassword')>=0){
            if(input['password'] !== input['confirmPassword']){
                errorArray.push({key: "password", errorText: "should not empty", status: true});
                errorArray.push({key: "confirmPassword", errorText: "should not empty", status: true})
            }
        }
    });
    return errorArray;
}

const validateMail = (email) =>{
    if(!email){
        return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export {
    validateForm
}