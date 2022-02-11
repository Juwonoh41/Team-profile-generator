const fs = require('fs')

if(fs.existsSync('./dist/team.html')){
    
    fs.unlinkSync('./dist/team.html');
    console.log("Reset")
}else{
    console.log('error')
}
