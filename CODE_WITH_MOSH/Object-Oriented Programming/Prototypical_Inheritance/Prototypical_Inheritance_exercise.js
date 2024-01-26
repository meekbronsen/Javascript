function HTMLElement(){
    this.click = function() { console.log("clicked") }
}

HTMLElement.prototype.focus = function(){
    console.log("focused!")
} 

function HTMLSelectElement(){
    let items = [];
    this.addItem = function(...item){ items.push(...item)};
    this.removeItem = function(...expandables){
        const newArray = items.filter((value) => !(expandables.includes(value)));
        items = newArray
    }
    Object.defineProperty(this,"items",{
        get: function(){ return items  }
    })
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype); // the first one was wrong because Object.create works only with the prototype. Your are assigning to the prototype not the instance(constructor)
HTMLSelectElement.prototype = new HTMLElement(); // a new object is created where click() will be available, then assigned to the SelectElement prototype
HTMLSelectElement.constructor = HTMLSelectElement;

const e = new HTMLElement()
const s = new HTMLSelectElement()

