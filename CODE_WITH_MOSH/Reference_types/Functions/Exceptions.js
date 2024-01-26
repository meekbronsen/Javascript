// Creating exception Try and Catch 

const person = {
    firstName : 'Meek',
    lastName  : 'Bronsen',

    get fullName() {
    return ` ${person.firstName} ${person.lastName}`
    },
    
    set fullName(Name) {
        if (typeof Name !== 'string'){
            throw new Error('The value is not a string')  // this is how we throw an exception
        }
        const part = Name.split(' ');
        
        if (part.length !== 2) {
            throw new Error('Enter two names!')
        };
        this.firstName = part[0];
        this.lastName = part[1];
    }
}

try {
    person.fullName = '';
}

// catch (e) {
//     console.log(e)
// }

catch (e) {
    console.log(e.message)
}

// console.log(person)
