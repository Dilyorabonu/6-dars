const student = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12 
}


const student2 = {
	name : "David Rayy",
	sclass : "VI",
	rollno : 12,
	age: 23,
	address: 'world'
}

function i(result) {
     return Object.keys(result).length;                                                     
    }
    console.log(i(student),i(student2)); 