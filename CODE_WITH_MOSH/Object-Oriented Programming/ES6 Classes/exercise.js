const _container = new WeakMap();

class Stack{
    constructor(){
        _container.set(this, [])
    }
    push(item){
        _container.get(this).unshift(item);
    }
    pop(item){
        const container = _container.get(this)

        if (container.length == 0){throw new Error("stack is empty")}
        return container.shift(item);
    }
    get peek(){
        const container = _container.get(this)

        if (container.length == 0){throw new Error("stack is empty")}
        return container[0];
    }
    get count(){
        if (_container.get(this).length == 0){throw new Error("stack is empty")}
        return _container.length
    }
}
const stack = new Stack();
