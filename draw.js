class Draw {
constructor(){
    this.options = ['url(https://images.freeimages.com/images/large-previews/5c1/beer-1326297.jpg)', 'url(https://images.freeimages.com/images/large-previews/815/xmas-bunny-1313404.jpg)', 'url(https://images.freeimages.com/images/large-previews/815/birds-ii-1379356.jpg)'];
    let _result = this.drawResult()
    this.getDrawResult = () => _result;
}
drawResult(){
    let colors = [];
    //uzupelnianie poprzez losowanie
    for(let i=0; i< this.options.length; i++){
        const index = Math.floor(Math.random()* this.options.length)
        const color = this.options[index]
// console.log(color); 
colors.push(color);
}
    return colors
}
}

// const draw = new Draw()
