
module.exports = functional;

function functional(fn, options) {

   options = options || {};

   return function(files, metalsmith, done) {

      if (fn.length > 2) {
        fn(files, metalsmith, callback);
        console.log('using cb');
      }
      else {
        callback(null, fn(files, metalsmith));
      }
      
      function callback(err, result) {
        
        if (!err && result) {
          if (!options.retain)
            Object.keys(files).forEach((key) => delete files[key]);
          
          if (Array.isArray(result)) {
            for (let file of result)
              files[file[options.id]] = file;
          } 
          else
            Object.assign(files, result);
        }
        
        done(err);
      }
   };
}
