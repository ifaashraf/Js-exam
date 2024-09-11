num=4
for(i=1;i<=num;i++){
    star=""
    for(j=num-1;j>=i;j--){
        star+=" "
    }
    for(j=1;j<=i;j++){
        star+="* "
    }
     
    console.log(star)
}