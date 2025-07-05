let a="Each character appears only once";
let count=[];
for(let i=0;i<=a.length;i++){
    if(!count.includes(a[i])){
        count.push(a[i]);
    }
}
let result=count.join("");
console.log(result);