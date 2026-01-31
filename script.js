function openHazbin() {
  document.getElementById('hazbinModal').style.display = 'flex';
}

function closeHazbin() {
  document.getElementById('hazbinModal').style.display = 'none';
}

function goHazbin(season) {
  if (season === 1) {
    window.open('https://sites.google.com/view/novashower/sho%C5%B5s/hazbin-hotel-s1?authuser=1', '_blank');
  } else {
    window.open('https://drive.google.com/drive/folders/1WqZOb9-LOLin-9kQlCB0D7ZrcfDwSucg?usp=sharing', '_blank');
  }
  closeHazbin();
}
