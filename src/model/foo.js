class Foo {
    name = 'Foo'
    constructor(){

        this.sayMyName = this.sayMyName.bind(this);
    }

    sayMyName(){
        console.log(`Parent My name is ${this.name}`)
    }
}

export default Foo