let a:any = {}

class example {
    public constructor(test?:string) { // '?' means that argument used is not required
        // 'a' represents 'this'
        // this.test will not work.
        a.test = test
    }

    public hello(required_arg:string, optional_arg?:any) {
        return `${required_arg} ${optional_arg ?? ''}`
    }

    public constructor_test() {
        return a.test
    }
}

console.log(new example().hello("hi world!","2nd arg")) // <-- example of simple function
console.log(new example("this is example arg from constructor").constructor_test()) // <-- test of args provided in constructor 

// @types/node is required
