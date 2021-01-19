// Add your functions here
function map(array, fn){
   let a =[]
   for(let i = 0; i < array.length; i++){
       a.push(fn(array[i]))
   }
   return a
}

function reduce(array, fn, start = 0){
    let base = start
    let a = []
    for(let i = 0; i < array.length; i++){
    //    base = fn(array[i], base)
        if (array[i]== false){
            return false
        } else {
            base = fn(array[i], base)
        }
    }
    
    return base
}