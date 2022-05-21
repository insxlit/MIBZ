name = prompt("здравствуйте,как вас зовут?");
age = prompt("сколько вам лет?");

if (age >= 18) {
  alert("Рад приветствовать на моём сайте,"+ name );
} else {
  alert("Дорова ! Поздравляю ты на моем сайте!!!!!Ура!");
}

function openSite() {
  if(confirm("Хотите перейти на другой сайт")){
    document.location.href = "https://www.youtube.com/channel/UC4-y7fqOG7L1fZ2QTshomAA";
  } else {
    document.location.href= "#about";
  }
}
