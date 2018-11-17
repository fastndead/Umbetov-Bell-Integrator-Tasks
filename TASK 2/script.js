function formSubmit() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = math(input.value);

    function math(str) {
        alert(str.match(/=/));

        var firstMatch = str.match(/[\+\-\*\/=]/);
        var result = parseFloat(str.substr(0,firstMatch.index));

        while (match = str.match(/[\+\-\*\/=]/)) {
            str = str.substr(match.index + 1, str.length);
            nextMatch = str.match(/[\+\-\*\/=]/);
            switch (match[0]) {
                case "+":
                    result += parseFloat(str.substr(0, nextMatch.index));
                    break;
                case "*":
                    result *= parseFloat(str.substr(0, nextMatch.index));
                    break;
                case "-":
                    result -= parseFloat(str.substr(0, nextMatch.index));
                    break;
                case "/":
                    result /= parseFloat(str.substr(0, nextMatch.index));
                    break;
                case "=":
                    return result;
            }
        }

    }
}