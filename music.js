// diffrent mthd
// let audio = document.querySelector(".audio");
// let toggleBtn = document.getElementById("toggleBtn");


// toggleBtn.addEventListener("click", function() {
//   if (audio.paused) {
//     audio.play();
//     toggleBtn.textContent = "Pause";
//   } else {
//     audio.pause();
//     toggleBtn.textContent = "Play";
//   }
// });




// diffrent mthd
// Get all play buttons
// const buttons = document.querySelectorAll('.playBtn');

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const target = button.getAttribute('data-target');
//     const image = document.getElementById(`image${target}`);
//     const audio = document.getElementById(`audio${target}`);

//     // Show image
//     image.classList.remove('hidden');
    
//     // Play audio
//     if (audio.paused) {
//       audio.play();
//     buttons.textContent = "Pause";
//   } else {
//     audio.pause();
//     buttons.textContent = "Play";
//   }
    
//     // Hide the image after audio ends
//     audio.onended = () => {
//       image.classList.add('hidden');
//     };
//   });
// });





// diffrent mthd
// document.querySelectorAll('.media-set').forEach(set => {
//   const button = set.querySelector('.media-button');
//   const image = set.querySelector('.media-image');
//   const audio = set.querySelector('audio');

//   button.addEventListener('click', () => {
//     // Show image
//     image.classList.remove('hidden');

//     // Play audio
//      if (audio.paused) {
//       audio.play();
//      button.textContent = "Pause";
//   } else {
//     audio.pause();
//     button.textContent = "Play";
//   }

//     // Optional: Hide image after audio ends
//     audio.paused = () => {
//       image.classList.add('hidden');
//     };
//     audio.onended = () => {
//       image.classList.add('hidden');
//     };
//   });
// });


// let a = document.querySelectorAll(".media-button")
//         let idx = 1;
//         for (let divs of a) {
//             console.log(divs);
//             divs.innerText = `play ${idx}`;
//         idx ++;
//         }





// diffrent mthd
let mediaSets = document.querySelectorAll('.media-set');

for (let set of mediaSets) {
  let button = set.querySelector('.media-button');
  let image = set.querySelector('.media-image');
  let audio = set.querySelector('audio');

  button.addEventListener('click', () => {
    image.classList.remove('hidden');

    
    if (audio.paused) {
      audio.play();
     button.textContent = "Pause";
  } else {
    audio.pause();
    let a = document.querySelectorAll(".media-button");
        let idx = 1;
        for (let divs of a) {
            console.log(divs);
            divs.innerText = `play ${idx}`;
        idx ++;
        }
  }


  audio.addEventListener('pause', () => {
    image.classList.add('hidden');
  });

    audio.onended = () => {
      image.classList.add('hidden');
    };
  });
}

let a = document.querySelectorAll(".media-button")
        let idx = 1;
        for (let divs of a) {
            console.log(divs);
            divs.innerText = `play ${idx}`;
        idx ++;
        }

