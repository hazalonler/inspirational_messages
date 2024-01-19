const yesterday = 'Yesterday was ';
const today = 'Today is ';
const tomorrow = 'Tomorrow will be ';


const yesterdayArr = ['bad', 'dissappointing', 'frustrating', 'filled with anger', 'full of loneliness','full of doubt', 'bitter']
const todayArr = ['good', 'hopeful', 'full of happiness', 'powerful', 'sweet', 'cheerful', 'filled with peace']
const tomorrowArr = ['more satisfied', 'more beautiful', 'less stressful','braver', 'clearer', 'more exciting',  'prettier']


const messageArguments = () => {

    let randomNum = Math.floor(Math.random() * 7);
    let messageArr = []
    messageArr.push(yesterdayArr[randomNum]) 
    messageArr.push(todayArr[randomNum])
    messageArr.push(tomorrowArr[randomNum])

    return messageArr
}

const messageFactory = (messageArr) => {
    return {
        yesterdayMessage: yesterday + messageArr[0],
        todayMessage: today + messageArr[1],
        tomorrowMessage: tomorrow + messageArr[2]
    }
};


console.log(messageFactory(messageArguments()));




