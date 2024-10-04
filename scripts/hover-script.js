document.addEventListener("DOMContentLoaded", function() {
    let hoverPrometall = document.querySelector('.container_tap');
hoverPrometall.addEventListener('mouseover', (e) =>{
  hoverPrometall.style.transform = "scale(1.1)"
  document.querySelector('.container_tap1').classList.add('hover_ind');
  document.querySelector('.container_tap2').classList.add('hover_ind');
  document.querySelector('.container_tap3').classList.add('hover_ind');
})

hoverPrometall.addEventListener('mouseout', (e) =>{
  hoverPrometall.style.transform = "scale(1.0)"
  document.querySelector('.container_tap1').classList.remove('hover_ind');
  document.querySelector('.container_tap2').classList.remove('hover_ind');
  document.querySelector('.container_tap3').classList.remove('hover_ind');
})

let hoverFerrum = document.querySelector('.container_tap1');
hoverFerrum.addEventListener('mouseover', (e) =>{
  hoverFerrum.style.transform = "scale(1.1)"
  document.querySelector('.container_tap').classList.add('hover_ind');
  document.querySelector('.container_tap2').classList.add('hover_ind');
  document.querySelector('.container_tap3').classList.add('hover_ind');
})

hoverFerrum.addEventListener('mouseout', (e) =>{
  hoverFerrum.style.transform = "scale(1.0)"
  document.querySelector('.container_tap').classList.remove('hover_ind');
  document.querySelector('.container_tap2').classList.remove('hover_ind');
  document.querySelector('.container_tap3').classList.remove('hover_ind');
})

let hoverCraftH = document.querySelector('.container_tap2');
hoverCraftH.addEventListener('mouseover', (e) =>{
  hoverCraftH.style.transform = "scale(1.1)"
  document.querySelector('.container_tap').classList.add('hover_ind');
  document.querySelector('.container_tap1').classList.add('hover_ind');
  document.querySelector('.container_tap3').classList.add('hover_ind');
})

hoverCraftH.addEventListener('mouseout', (e) =>{
  hoverCraftH.style.transform = "scale(1.0)"
  document.querySelector('.container_tap').classList.remove('hover_ind');
  document.querySelector('.container_tap1').classList.remove('hover_ind');
  document.querySelector('.container_tap3').classList.remove('hover_ind');
})


let hoverCraftInd = document.querySelector('.container_tap3');
hoverCraftInd.addEventListener('mouseover', (e) =>{
  hoverCraftInd.style.transform = "scale(1.1)"
  document.querySelector('.container_tap').classList.add('hover_ind');
  document.querySelector('.container_tap1').classList.add('hover_ind');
  document.querySelector('.container_tap2').classList.add('hover_ind');
})

hoverCraftInd.addEventListener('mouseout', (e) =>{
  hoverCraftInd.style.transform = "scale(1.0)"
  document.querySelector('.container_tap').classList.remove('hover_ind');
  document.querySelector('.container_tap1').classList.remove('hover_ind');
  document.querySelector('.container_tap2').classList.remove('hover_ind');
})
})