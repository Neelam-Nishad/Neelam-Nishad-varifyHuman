let randomIndex = Math.floor(Math.random()*5+1);

let one = document.createElement('img');
    one.setAttribute('src', "https://picsum.photos/id/230/80");
    one.setAttribute('data-ns-test','img1');
    one.className='notClicked';
let two = document.createElement('img');
    two.setAttribute('src',"https://picsum.photos/id/231/80");
    two.setAttribute('data-ns-test','img2');
    two.className='notClicked';
let three = document.createElement('img');
    three.setAttribute('src',"https://picsum.photos/id/233/80");
    three.setAttribute('data-ns-test','img3');
    three.className='notClicked';
let four = document.createElement('img');
    four.setAttribute('src',"https://picsum.photos/id/234/80");
    four.setAttribute('data-ns-test','img4');
    four.className='notClicked';
let five = document.createElement('img');
    five.setAttribute('src',"https://picsum.photos/id/235/80");
    five.setAttribute('data-ns-test','img5');
    five.className='notClicked';

let images = [one, two, three, four, five];

let six = images[randomIndex-1].cloneNode(true);
images.push(six);

function shuffle(images){
    images.sort(()=> Math.random()-0.5);
}
shuffle(images);

let imageBlock = document.getElementById('pics1');
for(let i=0; i<images.length; i++){
    imageBlock.appendChild(images[i]);
}

let imageArray = document.getElementsByTagName('img');
for(let i=0; i<imageArray.length; i++){
    imageArray[i].addEventListener("click", function(){
        clicked(imageArray[i]);
    });
}

let counter = 0; 
let clickedElement = [];
function clicked(element){
    if(!clickedElement.includes(element)){
        clickedElement.push(element);
        counter++;
        element.setAttribute('class','clicked');
        if(counter>0){
            document.getElementById('reset').className="";
        }
        if(counter>1){
            document.getElementById("btn").className="";
        }
        if(counter>2){
            document.getElementById('btn').className="invisible";
        }
    }
}

function reset(){
    counter = 0;
    clickedElements = [];
    for(let i=0; i<imageArray.length; i++){
        imageArray[i].className="notClicked";
    }
    document.getElementById("reset").className = 'invisible';
    document.getElementById("btn").className = 'invisible';
    document.getElementById("para").className= 'invisible';
    document.getElementById('para').innerHTML = "";
}

function varify(){
    let first = clickedElement[0].getAttribute("src");
    let second = clickedElement[1].getAttribute("src");
    let result = document.getElementById("para");
    result.className = "";
    document.getElementById("btn").className="invisible";
    if(first == second){
        result.innerHTML = "You are a human. Congratulations!";
        result.className="paraAccept";
    } else{
        result.innerHTML ="We can't verify you as a human. You selected the non-identical tiles.";
        result.className = "paraReject";
    }
}