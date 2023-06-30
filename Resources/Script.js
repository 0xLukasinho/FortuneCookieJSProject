const possibleTimeframe =['decade', 'year', 'quarter', 'month', 'two weeks', 'next week', 'few days'];
const possibleAspectOfLife = ['your love life', 'your career', 'an unexpected trip', 'taking a big risk', 'a crazy experience', 'a yet unknown person', 'a new friend'];
const possibleWhatHappens = ['turn upside down.', 'offer you a lucky break.', 'offer you a happy surprise.', 'face you with challenges that make you grow mentally.', "hit you with something you don't see coming.", 'tempt you into making a bad decision. Be careful not to fall for it!', 'make you go through a rough time before things finally lighten up again.', 'make you questioning your future.', "offer you clarity about a question you've been asking yourself for a while.", 'offer you some of the best experiences of your life.']

function generateMessage() {
    let randomNrTimeframe = Math.floor(Math.random()*possibleTimeframe.length);
    let randomNrAspectOfLife = Math.floor(Math.random()*possibleAspectOfLife.length);
    let randomNrWhatHappens = Math.floor(Math.random()*possibleWhatHappens.length);
    
    let timeframe = possibleTimeframe[randomNrTimeframe];
    let aspectOfLife = possibleAspectOfLife[randomNrAspectOfLife];
    let whatHappens = possibleWhatHappens[randomNrWhatHappens];

    document.getElementById('messageHere').innerHTML = `<p>Within the next ${timeframe} ${aspectOfLife} will ${whatHappens}</p>`;
    document.getElementById('GetCookieButton').innerHTML = "Open another one";
    
}

function changeImage() {
    document.getElementById('cookie-container').style.backgroundImage = 'url(Resources/Images/CookieOpen.jpg)'; 
}