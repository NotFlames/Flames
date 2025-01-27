var lines = [
    "You like cuddles and I like kissing And we both know exactly what's missing",
    "Hey girl, are you a snapchat filter? Because I want you on my face",
    "Jesus turned water into wine, Me and you can turn wine into a good time",
    "Nice legs, what time do they open?",
    "Are u a school? Cuz I wanna shoot kids inside you.",
    "Fuck me if I'm wrong, but you want to fuck me",
    "I wish I was cosine squared and you sine squared Because together we would be one",
    "My doctor said I'm lacking vitamin U",
    "Bae are u my alarm? cuz i miss u everyday",
    "it's cold outside, can i stay in ur heart?",
    "You can call me The sun, cause I'm gonna go down on you every night",
    "I will kiss you in the rain, so you get twice as wet",
    "Hey did you just discovered gravity? Cause you're pulling my heart closer to you",
    "Hey did you know your body is 70% water? I'm very thirsty",
    "Hello girl,  I lost my number, can I get yours?",
    "I'm zombie can i eat u out?",
    "You're so hot even my zipper is falling for you.",
    "There are 14 billion legs approximately in this world, But I just wanna be between yours.",
    "You must be a 9 volt battery Because I want to risk putting my tongue against you.",
    "Do you mind taking a picture together Because I gotta show my family what my future girlfriend looks like",
    "You're definitely a 9 And I'm just the 6 you need",
    "You know what they say play with fire you get burn. Play with me and you'll get wet",
    "Are you magician? Because I want you to make my virginity disappear",
    "Wow it's you... I can finally finish the puzzle!",
    "R u a fridge cuz I want to put my meat inside u",
    "Are you https? because without you I'm just ://",
    "I must be allergic to you because every-time I'm near you a part of me starts swelling.",
    "Damn girl, Are you a bullet, cuz i can't get you out of my head.",
    "Yoo girl you look so hot you can call me Chris brown, cuz ima beat the shit out of you.",
    "Girl are you my homework? Cause I want slam on the desk, promise to do you all night long, last 2 mins and continue to hate myself!",
    "You have all the right angles but if you were with me we'd make acute couple",
    "I think I saw you in a dictionary next to the word God DAMN",
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gen_new () {
    var ran = Math.floor(Math.random() * 26)
    if (lines[ran].length < 60) {
        document.getElementById("pickup-text").style.fontSize ="24px";
        document.getElementById("pickup-text").textContent=lines[ran];
      } else {
        document.getElementById("pickup-text").style.fontSize ="20px";
        document.getElementById("pickup-text").textContent=lines[ran];
      }   
}

async function enter () {
    document.getElementById("c-1").style.opacity ="40%";
    document.getElementById("c-1").style.pointerEvents ="none";

    for (let i = 1; i < 3; i++) {
        await sleep(400);
        document.getElementById("results").textContent="?";
        await sleep(600);
        document.getElementById("results").textContent="??";
        await sleep(500);
        document.getElementById("results").textContent="???";
      }

    var y_name = document.getElementById("yn").value;
    var p_name = document.getElementById("ypn").value;
    var m_num = document.getElementById("nmt").value;

    var combin = y_name.toLowerCase() + p_name.toLowerCase() + m_num.toLowerCase()

    var sum = 0

    for (let x = 0; x < combin.length; x++) {
        sum += combin.charCodeAt(x)
    };

    var ru = (sum % 5) + 1

    if (ru == 1) {
        document.getElementById("results").textContent="Friends..";
    } else if (ru == 2) {
        document.getElementById("results").textContent="Lovers!!";
    } else if (ru == 3) {
        document.getElementById("results").textContent="Friends..";
    } else if (ru == 4) {
        document.getElementById("results").textContent="Marraging!!";
    } else if (ru == 5) {
        document.getElementById("results").textContent="Enimes..";
    };

    document.getElementById("c-1").style.opacity ="100%";
    document.getElementById("c-1").style.pointerEvents ="auto";
}