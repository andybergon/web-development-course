var a = [1, 2, 3]


// a.forEach(function(e) { console.log(e)} )
//
// a.forEach(e => console.log(e))


var b = ['a', 'b', 'c']

a.forEach(function(e) {
    console.log(e + ":" + b);
});

a.forEach(e => console.log(e + ":" + b));

// a.forEach =

// a.pop()
//
// a.splice()