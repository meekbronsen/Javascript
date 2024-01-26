
// Named exports. We use curly braces in imports for named exports
// import { Teacher} from './teacher.js';
export class Teacher{
    constructor(degree){
        this.degree = degree;
    }
    teach(){
        console.log("teaching!");
    }
}

// Default exports. Pastor being the maing thing being exported from the module
// import Paster from './pastor.js'

export default class Pastor{
    constructor(chapter){
        this.chapter = chapter;
    }
    teach(){
        console.log("The word of God!");
    }
}

// Default -> import  ...  from 
// Named   -> import {...} from

// import React, { Components } from 'react' // React is imported from node modules folder as a library