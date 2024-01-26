
const lst = [1,2,3,4]

const Obj = {
    name : 'Mike',
    age : 23
}

const objCopy = Object.assign({gender : 'Male', birth : 1999},Obj)

const lstCopy = lst.slice(0,4)

console.log(lstCopy)