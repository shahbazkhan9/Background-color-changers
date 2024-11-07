// const randomColor = function() {
//     const hex = '0123456789abcdef';
//     const color = '#';
//     for(let i=0;i<6;i++){
//         color+= hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };
// console.log(randomColor());


const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(randomHexColorCode()); // '#e34155'


  let intervalId;
const startChangingColor = function(){
      
       intervalId = setInterval(ChangeBgColor, 1000);

    function ChangeBgColor(){
        if(intervalId != null){
            document.body.style.backgroundColor = randomHexColorCode();
        }
    }
}

const stopChangingColor = function(){
        clearInterval(intervalId);
        intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);