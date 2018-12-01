function objectFactory () {
    var obj = new Object()
    Constructor = [].shift.apply(arguments)
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments)
    return obj;
}