import makaronyImg from "../images/makarony.png";
import borshImg from "../images/borsh.png";
import saladImg from "../images/salad.png";
import belyashImg from "../images/belyash.png";
import vodaImg from "../images/voda.png";
import piroshkiImg from "../images/piroshki.png";
import gulyashImg from "../images/gulyash.png";

export function getData() {
  return [
    { title: "Гуляш гарниром", price: 150, Image: gulyashImg, id: 1 },
    { title: "Макороны по флотски", price: 160, Image: makaronyImg, id: 2 },
    { title: "Борщ", price: 180, Image: borshImg, id: 3 },
    { title: "Пирожки", price: 55, Image: piroshkiImg, id: 4 },
    { title: "Беляш", price: 70, Image: belyashImg, id: 6 },
    { title: "Салат", price: 75, Image: saladImg, id: 5 },
    { title: "Стакан воды", price: 15, Image: vodaImg, id: 7 },
  ];
}
