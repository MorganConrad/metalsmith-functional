var test = require('tape');
var functional = require('../functional.js');

const mockMetalsmith = { version: 1.2, count: 0 };

let wasError = null;

// setup - need to recreate these each time
function createFiles() {
   mockMetalsmith.count = 0;
   return {
      "file1" : {
         title: "title of file1",
         property1: "foo1",
         property2: "bar1",
         propertyOnlyIn1: true,
         version: 1.2
      },
      "file2" : {
         title: "title of file2",
         property1: "foo2",
         property2: "bar2",
         version: 3.4
      }
   }
};



// need this
function done(err) { wasError = err; }

function fn2Array(files, metalsmith) {
   return [files["file1"]];
}

function fn3Object(files, metalsmith, callback) {
   callback(null, {"file2": files["file2"]});
}

function fn3Error(files, metalsmith, callback) {
   callback("oops");
}

test('test fn2Array ', function(t) {
   var files = createFiles();
   functional(fn2Array, {id: 'property2'})(files, mockMetalsmith, done)

   t.false(wasError);
   t.true(files.bar1);
   t.false(files.file2);

   t.end();
});


test('test fn3Object ', function(t) {
   var files = createFiles();
   functional(fn3Object)(files, mockMetalsmith, done);
   
   t.false(wasError);
   t.false(files.file1);
   t.true(files.file2);

   t.end();
});

test('test fn3Error ', function(t) {
   var files = createFiles();
   functional(fn3Error)(files, mockMetalsmith, done);
   
   t.true(wasError);
   t.true(files.file1);  // no changes in files
   t.true(files.file2);

   t.end();
});

