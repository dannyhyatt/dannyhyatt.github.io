Array.prototype.forEach.call(document.getElementsByClassName('bg-gradient'), function(e) {
    if(screen.availWidth > 630 && e.tagName.toLowerCase() === 'body') return;
    console.log(screen.width + e.tagName)
    let color2 = getColor();
    let css = 'linear-gradient(' + Math.floor(Math.random() * 360) + 'deg, ' + getColor() + ', ' + getColor() + ', ' + color2 + ')';
    // let css = 'radial-gradient(circle, ' + getColor() + ' 0%, ' + getColor() + ' 90%, ' + getColor() + ' 95%, ' + getColor() + ' 98%, ' + getColor() + ' 100%);';
    console.log('' + css);
    e.style.backgroundImage = css;
    e.style.backgroundColor = color2;
    console.log(e.style);
});

function getColor(){
    return "hsl(" + 360 * Math.random() + ',' +
        (60 + 15 * Math.random()) + '%,' +
        (65 + 20 * Math.random()) + '%)'
}