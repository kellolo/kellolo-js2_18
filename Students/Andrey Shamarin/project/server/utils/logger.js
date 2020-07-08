let fs = require('fs');

function logTime(){
	return new Date() + ' ';
};

debugger
module.exports = async function(url, message, item) {
	try {
		
		await fs.appendFile(url, logTime() + message + item + ' ' +  '\n', err =>{});
		return true;
	}
	catch(err) {
		console.log(err);
		return false;
	}	
}