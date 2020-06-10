Array.prototype.forEach.call(document.getElementsByClassName('bg-gradient'), function(e) {
    if(screen.width > 630 && e.tagName.toLowerCase() === 'body') return;
    console.log(screen.width + e.tagName)
    let color2 = getColor();
    let css = 'linear-gradient(45deg, ' + getColor() + ', ' + color2 + ')'
    console.log(css);
    e.style.backgroundImage = css;
    e.style.backgroundColor = color2;
    console.log(e.style);
});

function getColor(){
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (65 + 8 * Math.random()) + '%)'
}