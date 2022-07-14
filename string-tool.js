const StringTool = {
    typewriter: function(param) {
        let element = document.querySelector(param.element);
        let string = param.string.split("");
        let speed = param.speed;
        string.forEach(function(text, index) {
            window.setTimeout(function() {
                element.innerText += text;
            }, speed * index);
        })
    }
}