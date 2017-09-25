function A(name) {
    this.name = name;
    this.sayHello = function () { alert(this.name + "say Hello!"); };
}
function B(name, id) {
    this.temp = A;
    this.temp(name);        //相当于new A();
    delete this.temp;
    // A.call(this, name)
    A.apply(this, name, id)
    this.id = id;
    this.checkId = function (ID) { alert(this.id == ID) };
}
var able = new B("xiao", 3216);
