function verifyUsers(username,callback) {
    if(username=='srilaxmi')
    callback(username)
    else
    callback("invalid User");        
}
var arr=["Admin","HR","Tester"];
function getRoles(username,callback) {
    if(username=="srilaxmi")
    callback(arr)
    else
    callback("Invalid");       
}
function checkUserAccess(a,callback) {
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]=="Tester")
        {
        callback("Success");
            break;
        }
        else
        callback("Failure");
    }
}
function authenticateUser(username,pwd,callback) {
    if(username=="srilaxmi" && pwd=="99999")
    callback("success");
    else
    callback("Failure");
    
}
authenticateUser("srilaxmi","99999",function(res1){
    verifyUsers(res1,function(res2){
        getRoles(res2,function(res3){
            checkUserAccess(res3,function(res4){
                console.log(res4);
            })
        })
    })
})