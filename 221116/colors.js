var Links = {
    setColor: function(color) {
     var alist = document.querySelector('a');
     var alist = document.querySelectorAll('a');
     var i = 0;
     while(i < alist.length) {
     alist[i].style.color = color;
@@ -53,7 +53,7 @@
                Body.setColor('white');
                self.value = 'day'
                //setColor('powderblue');
                Links.setColor('powderblue')
                Links.setColor('red')

            } else {
              //  target.style.backgroundColor = 'white';
                //BodySetBackgroudSetColor('white')
                Body.setBackgroundColor('white');
              //  target.style.color = 'black';
                //BodySetColor('black');
                Body.setColor('black');
                self.value = 'night'
                //setColor('blue');
                Links.setColor('blue')
              
    
                }
    }