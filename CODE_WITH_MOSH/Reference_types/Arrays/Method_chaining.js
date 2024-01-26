const lst = [-2,-1,0,1,2,3,4,-5]

// NOTE: methods that do not alter the original data type (non-mutating) are chainable

const chain = lst
    .filter(value => value > 0)
    .map(value => ({ ID : value}))

console.log(chain)    

// NOTE: by convention, each methon in the chain should be set on a new line