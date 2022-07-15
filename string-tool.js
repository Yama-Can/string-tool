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
    },
    toArray: function(string) {
        return string.split(',');
    },
    toJSON: function(string) {
        return JSON.parse(string);
    },
    toInt: function(string) {
        return parseInt(string);
    },
    setSize: function(size, element) {
        element.style += "font-size:" + size + ";";
        return 0;
    },
    write: function(string, element) {
        element.innerText = string;
        return 0;
    }
}