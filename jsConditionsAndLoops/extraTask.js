const string = "ALL CHARS IS UPPERCASE"

function isUpperCase(inputString){
    if (inputString === inputString.toUpperCase()){
        return true
    }else{
        return false
    }
}

console.log(isUpperCase(string))