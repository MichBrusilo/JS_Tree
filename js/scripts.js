function drawTree(a){
  
    for(var i=1;i<=a;i++) {
      
     var star = " ";
     for(var k=a;k>=i;k--) {
       star += " ";
     }
     
     for(var j=1;j<=i;j++) {
     
     star += "*";
      
     }
     
     for (var l=3;l<=j;l++) {
       star += "*";
     }
      console.log(star);
     }
  };
  
drawTree(100);