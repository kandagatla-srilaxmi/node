function verifyUser(username) {
    var pm=new Promise(function(resolve,reject){
        if(username=="srilaxmi")
        resolve(username);
        else
        reject("Invalid User");
    })
     return pm;
}
var arr=["Admin","Tester","HR"];
function getRoles(username){
    return new Promise(function(resolve,reject){
        if(username=="srilaxmi")
        resolve(arr);
        else
        reject("invalid");
    })
}
function checkUserAccess(arr){
    return new Promise(function(resolve,reject){
    for(i=0;i<arr.length;i++)
    {
        if(a[i]=="Admin")
        resolve("Success");
        else
        reject("Invalid");
    }
})
}
function authenticateUser(username,pwd){
    return new Promise(function(resolve,reject){
        if(username=="srilaxmi" && pwd=="99999")
        resolve("Success");
        else
        reject("Failure");
    })
}
authenticateUser("srilaxmi","99999")
.then(verifyUser)
.then(getRoles)
.then(checkUserAccess)
.then(function(pro){
    console.log(pro);
})
.catch(function(pro){
    console.log(pro)
})