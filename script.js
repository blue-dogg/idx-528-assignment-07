const add=function(x,y){
    if (typeof x !="number", y !="number"){
        return "Error";
    } 

    let ans=x+y;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const subtract=function(x,y){
    if (typeof x !="number", y !="number"){
        return "Error";
    } 

    let ans=x-y;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const multiple=function(x,y){
    if (typeof x !="number", y !="number"){
        return "Error";
    } 

    let ans=x*y;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const divide=function(x,y){
    if (typeof x !="number", typeof y !="number" || y==0){
        return "Error";
    } 

    let ans=x/y;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const square=function(x){
    if (typeof x !="number"){
        return "Error";
    } 

    let ans=x*x;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const cube=function(x){
    if (typeof x !="number"){
        return "Error";
    } 

    let ans=x*x*x;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const power=function(x, y){
    if (typeof x !="number", y !="number"){
        return "Error";
    } 

    if (y==0) {
        x=1;
    }

    let ans=x;
    for (let counter=1; counter<y; counter++) {
       ans *=x; 
    }
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const modulo=function(x, y){
    if (typeof x !="number", typeof y !="number"){
        return "Error";
    } 

    if (y==0){
        return NaN;
    } 

    let ans=x%y;
    ans=(ans*1).toFixed(2);
    ans=parseFloat(ans);
    return ans;
}

const squareRoot=function(x, g){
    if (typeof x !="number" || x<=0){
        return "Error";
    } 
    
    if (!g) {
        g=x/2.0;
    }
    var d=x/g;
    var xg=(d+g) / 2.0;
    if (g==xg) {          
        return g;
    }
    return squareRoot(x, g);
}

const root=function(x, y){
    if (typeof x !="number" || x<=0, y !="number"){
        return "Error";
    }    

     yg=y%2;
     if((yg==1) || x<0)
        x=-x;
     var r=Math.pow(x, 1/n);
     n=Math.pow(r, n);
   
     if(Math.abs(x-n)<1 && (x>0===n>0))
       return ng?-r:r; 
    }
