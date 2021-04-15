const lis = document.querySelectorAll("ul li")

lis.forEach(node => {
    node.addEventListener('mousedown', function(event) {
        const value = node.innerHTML.trim()
        let $result = document.querySelector(".result")
        const $formula = document.querySelector(".formula")
        let resultText = $result.innerHTML.trim()

        if (value.toLowerCase() == 'c') {
            $result.innerHTML = ''
            $formula.innerHTML = ''
            return true
        }
        if (value == '=' && (Number(resultText.charAt(resultText.length - 1)) || resultText.charAt(resultText.length - 1) == 0)) {
            if (resultText.charAt(0) == '*' || resultText.charAt(0) == '/' || resultText.charAt(0) == '+' || $result.innerHTML.charAt(0) == '-') {
                resultText = "0" + resultText
                $formula.innerHTML = resultText
            }
            let solution = eval(resultText)
            $result.innerHTML = solution
            $formula.innerHTML = $formula.innerHTML + " = " + `<u>${solution}</u>`
            return true
        } else if ((resultText.charAt(resultText.length - 1) == '*' || resultText.charAt(resultText.length - 1) == '/' || resultText.charAt(resultText.length - 1) == '+' || resultText.charAt(resultText.length - 1) == '-' || resultText.charAt(resultText.length - 1) == '.') && (value == '/' || value == '*' || value == '+' || value == '-')) {
            $result = $result.innerHTML.slice(0, -1)
        } else if (resultText.charAt(resultText.length - 1) == '.' && value == '.') {
            $result = $result.innerHTML.slice(0, -1)
        } else {
            $result.append(value)
            $formula.append(value)
        }
    })
})