/**
 * Created by Mykolaj Krusser on 02/03/2018.
 */
function main () {
    let img = [ //object json
        {
            "url": "assets/img/3.png",
            "alt": "Business 3"
        },
        {
            "url": "assets/img/2.jpg",
            "alt": "Business 2"
        },
        {
            "url": "assets/img/1.jpg",
            "alt": "Business 1"
        }
    ];
    let dotsParent = document.getElementById("dots"); //block which contains dots elements
    let slide = document.getElementById("img"); //pictures element

    dotsParent.onclick = function (e) { //function change picture link by click on dots
        let target = e.target; // target clicked element
        for(let i = 0; i < dotsParent.children.length; i++) { //for all dots
            if(dotsParent.children[i] === target){ //which was clicked
                slide.src = img[i].url;//change picture link, number text and describe text
                slide.alt = img[i].alt;//change alt
            }
        }
    };
}
main ();
