const yesterday = 'Yesterday was ';
const today = 'Today is ';
const tomorrow = 'Tomorrow will be ';


const yesterdayArr = ['bad', 'dissappointing', 'frustrating', 'filled with anger', 'full of loneliness','full of doubt', 'bitter']
const todayArr = ['good', 'hopeful', 'full of happiness', 'powerful', 'sweet', 'cheerful', 'filled with peace']
const tomorrowArr = ['more satisfied', 'more beautiful', 'less stressful','braver', 'clearer', 'more exciting',  'prettier']


const inspirationMessage = () => {

    let randomNum = Math.floor(Math.random() * 8);
    let message = yesterday + yesterdayArr[randomNum] + '\n' + today + todayArr[randomNum] + '\n' + tomorrow + tomorrowArr[randomNum]

    return message
}


console.log(inspirationMessage());




