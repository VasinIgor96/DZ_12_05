import Logo from "../assets/img/Logo.png"
import search from "../assets/img/search.png"
import drone from "../assets/img/mini_drone-1.jpeg"
import card1 from "../assets/img/ultraLight.png"
import card2 from "../assets/img/bestResolution.png"
import drone2 from "../assets/img/benefitFeature.png"
import miniDrone from "../assets/img/mini_drone-2.jpeg"
import ligthDrone from "../assets/img/mini_drone-1.jpeg"
import phantomDrone from "../assets/img/mini_drone.jpeg"
import person1 from "../assets/img/profile1.png"
import person2 from "../assets/img/profile2.png"
import person3 from "../assets/img/profile3.png"
import lastLogo from "../assets/img/Logo.png"



const imgRef = [
    {
        scr: Logo,
        alt: "logo image",
        id: "1",
    },
    {
        scr: search,
        alt: "search image",
        id: "2",
    },
    {
        scr: drone,
        alt: "drone image",
        id: "3",
    },
    {
        scr: card1,
        alt: "card1 image",
        id: "4",
    },
    {
        scr: card2,
        alt: "card2 image",
        id: "5",
    },
    {
        scr: drone2,
        alt: "ligth image",
        id: "6",
    },
    {
        scr: miniDrone,
        alt: "miniDrone image",
        id: "7",
    },
    {
        scr: ligthDrone,
        alt: "ligthDrone image",
        id: "8",
    },
    {
        scr: phantomDrone,
        alt: " phantomDrone image",
        id: "9",
    },
    {
        scr: person1,
        alt: " person image",
        id: "10",
    },
    {
        scr: person2,
        alt: " person image",
        id: "11",
    },
    {
        scr: person3,
        alt: " person image",
        id: "12",
    }, {
        scr: lastLogo,
        alt: "lastLogo image",
        id: "13",
    },
]


function addImg(src, id, alt) {
    document.getElementById(id).src = src
    document.getElementById(id).alt = alt
}


addImg(Logo, 1, "logo image")
addImg(search, 2, "search image")
addImg(drone, 3, "drone image")
addImg(drone2, 6, "ligth image")
addImg(miniDrone, 7, " miniDrone image")
addImg(ligthDrone, 8, " ligthDrone image")
addImg(phantomDrone, 9, " phantomDrone image")
const firstCard = document.querySelector('.first_card');
firstCard.style.backgroundImage = `url(${card1})`;
const secondCard = document.querySelector('.second_card');
secondCard.style.backgroundImage = `url(${card2})`;
addImg(person1, 10, " person image")
addImg(person2, 11, " person image")
addImg(person3, 12, " person image")
addImg(lastLogo, 13, " lastLogo image")



