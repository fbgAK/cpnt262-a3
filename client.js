// Sample array and objects
const Names = 
[
'Peach', 
'Bowser', 
'Luigi'
];


const user = 
{
inventor : 'Shigeru Miyamoto', 
owner: 'Nintendo', 
country: 'Japan'
};


// Array Methods

// .pop(): removed from array
Names.pop();
document.getElementById('pop').innerHTML = 'Pop:' + Names + '<br>';
// Result: [Peach,Bowser]

// .slice(): selects part of array
const slicedNames = Names.slice(3, 4);
document.getElementById('slice').innerHTML = 'slice:' + Names + '<br>';
// Result: [Peach,Bowser]

// .push(): added to array
Names.push('Mario');
document.getElementById('push').innerHTML = 'Push: '+ Names + '<br>';
// Result: [Peach,Bowser,Luigi,Mario]


// Object Methods

// Object.keys(): returns array of object.
const userKeys = Object.keys(user);
document.getElementById('object-keys').innerHTML ='object-keys:' + userKeys + '<br>';
// Result: [inventor,owner,country]


// Object.values():details of object.
const userValues = Object.values(user);
document.getElementById('object-values').innerHTML ='object-values' + userValues + '<br>';
// Result: [Shigeru Miyamoto,Nintendo,Japan]



