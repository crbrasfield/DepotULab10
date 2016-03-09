
    function add() {
        console.log('working...');
        var img = document.createElement('img');
        img.src = 'images/loading.gif';
        var loading = document.getElementById('loading')
        loading.appendChild(img);
        var num1 = document.getElementById('b1').value;
        var num2 = document.getElementById('b2').value;
        
        davidsLib.add(num1, num2, function(err,result) {
            if(err){
                alert("There was a problem")
                loading.removeChild(img);
            } else if(result){
                alert(result);
                loading.removeChild(img);
            }
        });

    }
    
    function subtract() {
        console.log('working...');
        var img = document.createElement('img');
        img.src = 'images/loading.gif';
        var loading = document.getElementById('loading')
        loading.appendChild(img);
        var num1 = document.getElementById('b1').value;
        var num2 = document.getElementById('b2').value;
        
        davidsLib.subtract(num1, num2, function(err,result) {
            if(err){
                alert("There was a problem")
                loading.removeChild(img);
            } else if(result){
                alert(result);
                loading.removeChild(img);
            }
        });
    }
    
    function multiply() {
        console.log('working...');
        var img = document.createElement('img');
        img.src = 'images/loading.gif';
        var loading = document.getElementById('loading')
        loading.appendChild(img);
        var num1 = document.getElementById('b1').value;
        var num2 = document.getElementById('b2').value;
        
        davidsLib.multiply(num1, num2, function(err,result) {
            if(err){
                alert("There was a problem")
                loading.removeChild(img);
            } else if(result){
                alert(result);
                loading.removeChild(img);
            }
        });
    }
    
    function divide() {
        console.log('working...');
        var img = document.createElement('img');
        img.src = 'images/loading.gif';
        var loading = document.getElementById('loading')
        loading.appendChild(img);
        var num1 = document.getElementById('b1').value;
        var num2 = document.getElementById('b2').value;
       
        davidsLib.divide(num1, num2, function(err,result) {
            if(err){
                loading.removeChild(img);
                alert("There was a problem")
                
            } else if(result){
                alert(result);
                loading.removeChild(img);
                
            }
        });
    }
    