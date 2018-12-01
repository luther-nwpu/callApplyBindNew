Function.prototype.myapply = function(context, arr) {
    var context = context || window
    context.fn = this
    var args = []
    for(var i = 0; i< arr.length; i++) {
        args.push('arr[' + i + ']')
    }
    var result = eval('context.fn('+args + ')')
    delete context.fn
    return result
}