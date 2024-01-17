setInterval(function(){
   let a = new Date()
   let h = a.getHours()
   let m = a.getMinutes()
   let s = a.getSeconds()
   let e = h*30+(m/2)
   let f = m*6
   let g = s*6
   let z = document.getElementById("hours")
   z.style.transform=`rotate(${e}deg)`
   let z1 = document.getElementById("minut")
   z1.style.transform=`rotate(${f}deg)`
   let z2 = document.getElementById("second")
   z2.style.transform=`rotate(${g}deg)`
},1000)