
function start_classification() {

    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_82tbx0uv/model.json", modelready);
}

function modelready() {

    classifier.classify(gotresult);
}

function gotresult(error, results) {

    console.log("gotresult");
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("heading_result").innerHTML = results[0].label;
        document.getElementById("heading_result1").innerHTML = (results[0].confidence * 100).toFixed(1) + "%";

        document.getElementById("heading_result").style.color = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("heading_result1").style.color = "rgb(" + red + "," + green + "," + blue + ")";

        img1 = document.getElementById("cat");
        img2 = document.getElementById("dog");
        img3 = document.getElementById("duck");
        img4 = document.getElementById("cow");

        if (results[0].label == "cat") {
            img1.src = "cat.gif";
            img2.src = "dog1.jpg";
            img3.src = "duck1.jpg";
            img4.src = "cow1.jpg";
        }
        else if (results[0].label == "dog") {
            img1.src = "cat1.jpg";
            img2.src = "dog.gif";
            img3.src = "duck1.jpg";
            img4.src = "cow1.jpg";
        }

        else if (results[0].label == "duck") {
            img1.src = "cat1.jpg";
            img2.src = "dog1.jpg";
            img3.src = "duck.gif";
            img4.src = "cow1.jpg";
        }

        else if (results[0].label == "cow") {
            img1.src = "cat1.jpg";
            img2.src = "dog1.jpg";
            img3.src = "duck1.jpg";
            img4.src = "cow.gif";
        }

    }
}


