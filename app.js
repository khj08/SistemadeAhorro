class Resolve {
    constructor (num1 , num2 , opSum , opRes , opMul , opDiv) {
        this.num1 = num1 ;
        this.num2 = num2 ;
        this.opSum = opSum ;

    }
}

class UI {
    sumar(num1 , num2, suma) {
        suma = parseInt(num1) + parseInt(num2);
        document.getElementById('Sum').value = `${suma}`
    }

    Cta1(num1 , num2, suma, Cuenta1) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta1 = suma*0.55;
            document.getElementById('Cuenta1').value = `${Math.trunc(Cuenta1)}`
        }
    }

    Cta2(num1 , num2, suma, Cuenta2) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta2 = suma*0.10;
            document.getElementById('Cuenta2').value = `${Math.trunc(Cuenta2)}`
        }
    }

    Cta3(num1 , num2, suma, Cuenta3) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta3 = suma*0.10;
            document.getElementById('Cuenta3').value = `${Math.trunc(Cuenta3)}`
        }
    }

    Cta4(num1 , num2, suma, Cuenta4) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta4 = suma*0.10;
            document.getElementById('Cuenta4').value = `${Math.trunc(Cuenta4)}`
        }
    }

    Cta5(num1 , num2, suma, Cuenta5) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta5 = suma*0.10;
            document.getElementById('Cuenta5').value = `${Math.trunc(Cuenta5)}`
        }
    }

    Cta6(num1 , num2, suma, Cuenta6) {
        const checkbox = document.getElementById('checkS').checked
        if(checkbox == true) {
            suma = parseInt(num1) + parseInt(num2);
            Cuenta6 = suma*0.05;
            document.getElementById('Cuenta6').value = `${Math.trunc(Cuenta6)}`
        }
    }


    
    reset() {
        document.getElementById("form-resolve").reset();
      }

 
}

document.getElementById('form-resolve').addEventListener('submit' , (e) => {
    e.preventDefault() ;

    const num1 = document.getElementById('numero1').value
    const num2 = document.getElementById('numero2').value
    const opSum = document.getElementById('Sum').value
    const opCuenta1 = document.getElementById('Cuenta1').value
    const opCuenta2 = document.getElementById('Cuenta2').value
    const opCuenta3 = document.getElementById('Cuenta3').value
    const opCuenta4 = document.getElementById('Cuenta4').value
    const opCuenta5 = document.getElementById('Cuenta5').value
    const opCuenta6 = document.getElementById('Cuenta6').value
    
   
    const ui = new UI()
    const resolve = new Resolve(num1 , num2 , opSum, opCuenta1, opCuenta2, opCuenta3, opCuenta4, opCuenta5, opCuenta6 )

        ui.sumar(num1 , num2)
        ui.Cta1(num1 , num2)
        ui.Cta2(num1, num2)
        ui.Cta3(num1, num2)
        ui.Cta4(num1, num2)
        ui.Cta5(num1, num2)
        ui.Cta6(num1, num2)
     
        ui.resolve(resolve)
        ui.reset(reset)
    

})