Function.prototype.bind2 = function(context) {
    var self = this
    var args = Array.prototype.slice.call(arguments, 1)
    var fNOP = function() {}
    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this: context || this, args.concat(bindArgs));
    }
    fNOP.prototype = self.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}