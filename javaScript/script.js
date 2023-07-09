let oldValue, newValue, result, operator;

function buttonClick(val) {

    if (val == 1) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 2) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 3) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 4) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 5) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 6) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 7) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 8) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == 9) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    if (val == 0) {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == '.') {
        document.getElementById("screen").value = document.getElementById("screen").value += val;
    }
    else if (val == '+') {
        oldValue = parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value = "";
        operator = 1;
    }
    else if (val == '-') {
        oldValue = parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value = "";
        operator = 2;
    }
    else if (val == '/') {
        oldValue = parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value = "";
        operator = 3;
    }
    else if (val == '*') {
        oldValue = parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value = "";
        operator = 4;

    }
    else if(val=='='){
        switch(operator){
            case 1:
                newValue=parseInt(document.getElementById("screen").value);
                result=oldValue+newValue;
                operator=0;
                break;
            case 2:
                newValue=parseInt(document.getElementById("screen").value);
                result=oldValue-newValue;
                operator=0;
                break;
            case 3:
                newValue=parseInt(document.getElementById("screen").value);
                result=(oldValue/newValue);
                operator=0;
                break;
            case 4:
                newValue=parseInt(document.getElementById("screen").value);
                result=oldValue*newValue;
                operator=0;
                break;
            default:
                document.getElementById("screen").value
                operator=0;
        }
        document.getElementById("screen").value = result;
    }
    else if (val == 'clear') {
        document.getElementById("screen").value = "";
        operator = 0;
    }
}
