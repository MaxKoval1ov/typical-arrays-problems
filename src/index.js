
//function ifnumber(value) => {typeof(value==Number);
//};

exports.min = function min (array) {
  if (array==undefined)
  return 0;
   var res=Math.min(...array);
   if (res===NaN ||res===Infinity)
   return 0;
   return res;
}

exports.max = function max (array) {
  if (array==undefined)
  return 0;
  var res=Math.max(...array);
   if (res===NaN ||res===-Infinity)
   return 0;
   return res;
}

exports.avg = function avg (array) {
  if (array==undefined||array.length==0)
  return 0;
  return array.reduce((a,b)=>a+b,0)/array.length;;
}
