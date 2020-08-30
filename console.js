function ProcessCommand(e)
{
    if (e.keyCode == 13) //enter is pressed
    {
        e.handled = true;
        let inputBoxElement = document.getElementById('usercommand')
        if (inputBoxElement.value.length < 1) //If command is blank, return early
        {
            return;
        }
        let consoleDiv = document.getElementById('consolelog')
        var command = inputBoxElement.value;
        if (command == "clear")
        {
            while (consoleDiv.firstChild) //Remove all children from console div when clearing
            {
                consoleDiv.removeChild(consoleDiv.firstChild);
            }
        }

        var commandInputSpan = document.createElement("SPAN");
        commandInputSpan.innerHTML = command + '<br/>';
        consoleDiv.appendChild(commandInputSpan);

        if (command == "spamtest")
        {
            for(var i=0; i<50000; i++) //add 50k spam spans to console
            {
                var spamTestSpan = document.createElement("SPAN");
                spamTestSpan.innerHTML = i.toString() + '<br/>';
                consoleDiv.appendChild(spamTestSpan);
            }
        }
        
        consoleDiv.scrollTop = consoleDiv.scrollHeight; //Scroll to bottom
        inputBoxElement.value = ""; //Clear input textbox
    }
}
