        const playSong=document.getElementById('image-container').children;
        for(var i=0;i<playSong.length;i++){
      var l=  playSong[i].addEventListener("click",mymusic)
     var j=   playSong[i].addEventListener('dblclick',pausesong)
        var song1=new Audio()
        song1.src="ser-hat.mp4"
        var song2=new Audio()
        song2.src="goli-dai.mp4"
        var song3=new Audio()
        song3.src="D-panda.mp4"
        var song4=new Audio()
        song4.src="snoop-dog.mp4"
        var song5=new Audio()
        song5.src="wiz new.mp4"
        var song6=new Audio()
        song6.src="wiz world.mp4"
        var song7=new Audio()
        song7.src="co-lio.mp4"
        var song8=new Audio()
        song8.src="sad-boy.mp4"
        var song9=new Audio()
        song9.src="the album.mp4"

function mymusic(){
    document.getElementById('image-container').classList.add('anim')
    
var addanim=document.querySelectorAll('#box');
var thisText=this.innerHTML;

switch(thisText){
case "1":
song1.play()
addanim[0].classList.add('showro');
break;
case "2":
song2.play()
addanim[1].classList.add('showro')
break;
case "3":
song3.play()
addanim[2].classList.add('showro')
break;
case "4":
song4.play()
addanim[3].classList.add('showro')
break;
case "5":
song5.play()
addanim[4].classList.add('showro')
break;
case "6":
song6.play()
addanim[5].classList.add('showro')
break;
case "7":
song7.play()
addanim[6].classList.add('showro')
break;
case "8":
song8.play()
addanim[7].classList.add('showro')
break;
case "9":
song9.play()
addanim[8].classList.add('showro')
break;
default:
console.log('error');
break;
        }
       
    }
            function pausesong(){
                
               let addstyle=document.getElementById('image-container');
               addstyle.classList.remove('anim')
                var thisText=this.innerHTML;
                var addanim=document.querySelectorAll('#box');
                
                switch(thisText){
                case "1":
                    song1.pause()
                    addanim[0].classList.remove('showro')
                    
                    break;
                    case "2":
                    song2.pause()
                    addanim[1].classList.remove('showro')
                     break;
                    case "3":
                    song3.pause()
                    addanim[2].classList.remove('showro')
                    break;
                    case "4":
                    song4.pause()
                    addanim[3].classList.remove('showro')
                     break;
                    case "5":
                    song5.pause()
                    addanim[4].classList.remove('showro')
                    break;
                    
                    case "6":
                    song6.pause()
                    addanim[5].classList.remove('showro')
                    break;
                    
                    case "7":
                    song7.pause()
                    addanim[6].classList.remove('showro')
                  
                    break;
                    
                    case "8":
                    song8.pause()
                    addanim[7].classList.remove('showro')
                     break;
                    
                    case "9":
                    song9.pause()
                    addanim[8].classList.remove('showro')
                    break;
                    default:
                        console.log('error');
                        break;
                        
            }
            }
        }
  
        

