let bal=5000;
function diposit(amt){
    bal+=amt;
    console.log(`${amt}credited, Available balance${bal}`)
}
function withdraw(amt){
    if(amt>bal){
        console.log('no bal');
    }else{
        bal-=amt
        console.log(`${amt} withdrawed ,Available balance${bal} `);
    }
}
module.exports={
diposit,
withdraw
}