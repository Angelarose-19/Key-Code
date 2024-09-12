respuesta=0
r=1
let fin=10 
const tabla = () => {
  for (let i = 1; i <= fin; i++) {
    console.log ( 'la tabla de mutiplicar es ${i}');
        console.log ( "")
        for (let r =1; r<= 10; r++) {
            respuesta= i*r
            console.log (i, "*", r, "=", respuesta)
    }
    console.log (" ")

  }

}
 tabla()