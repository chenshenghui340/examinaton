function fn() {
    this.a = 0;
    // this.b = function () {
    //     alert(this.a)
    // }
}
fn.prototype = {
    b: function () {
        this.a = 20;
        console.info(this.a);
    },
    c: function () {
        this.a = 30;
        console.info(this.a);
    }
}
var myfn = new fn();
myfn.b(); 
myfn.c();