function teste(a,b){
    let array = [];
    console.log(array)
    if(a.indexOf(b) !== -1){
        array.push(b+a);
        console.log(array,' primeiro')
        return array;
    }else{
        array.push(a+b);
        console.log(array,' segundo')
        return array;
    }
}
console.log(teste( "ticks","S"))