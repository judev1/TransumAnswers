for (guess = 1; document.getElementsByName("Guess" + (guess).toString())[0] != undefined; guess++) {
    var x = "";
    var htmlscript = "";
    
    for (script = 0; script < document.scripts.length; script++) {
        htmlscript = document.scripts[script].innerHTML;
        if (htmlscript.search("checkAnswers()") != -1) {
            while (!htmlscript.startsWith(guess.toString() + "]').val().")) {
                htmlscript = htmlscript.slice(1, htmlscript.length);
            }
            htmlscript = htmlscript.slice(30, htmlscript.length)
            var temp = htmlscript
            var pos = 0
            while (!temp.startsWith("'")) {
                temp = temp.slice(1, temp.length);
                pos += 1;
            }
            htmlscript = htmlscript.slice(0, pos).toLowerCase();
            htmlscript = htmlscript.replace(",", ", ");
            document.getElementsByName("Guess" + (guess).toString())[0].value = htmlscript;
            break;
        }
    }
}