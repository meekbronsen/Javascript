// we use getters to make properties readonly 
// we use setters to restructure the property
// setter will take effect when the property is being reassigned outside the class.

const person = {
    firstName :'Meek',
    lastName  :'Bronsen',
    set fullName(Name) {
        const part = Name.split(' ')
        this.firstName = part[0]
        this.lastName = part[1]
    },
    get fullName() {
        return ` ${this.firstName} ${this.lastName}`
    },
}

//person.fullName = 'Mosh Hamedani junior' 

console.log(person.fullName)