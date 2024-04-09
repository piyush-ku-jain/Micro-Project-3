let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string=''
buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if(e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length-1);
            display.value = string;  
        }
        else if(e.target.innerHTML == 'RESET') 
        { 
            string = '';
            display.value = string;  
        }
    
        else if(e.target.innerHTML == '=' )
        {   
            if(string.charAt(0) == '/' || string.charAt(0) == '*')
            {
                string='ERROR';
                display.value = string;
            }
            else{
                string=eval(string); 
                function decimalCount(string){
                    var numStr = String(string);
                   if (numStr.includes('.')) {
                     return numStr.split('.')[1].length;
                  };
                  return 0;
                 }

                var decimalNumber = decimalCount(string);

             if(decimalNumber >= 3){
                string=string.toFixed(3)
                display.value = string;
            }
            else{
                display.value = string;   
             }
            }  
        }
        else{
            string += e.target.innerHTML;
            display.value = string;  
        }
    });
});