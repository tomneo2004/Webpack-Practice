import Foo from "./foo"

class Bar extends Foo{

    constructor(){
        super()

        this.name = 'bar bar'
        this.sayMyName = this.sayMyName.bind(this)
    }

    sayMyName(){
        super.sayMyName();
        console.log(`Child My name is ${this.name}`)
    }
}

export default Bar