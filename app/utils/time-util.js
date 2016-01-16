var moment = window.moment;

function formatTime(time){
    if(time < 10){
        return '0' + time;
    }
    else{
        return time;
    }
}

function getTime(milliseconds) {
    var time = moment.duration(milliseconds);
    return formatTime(time.hours()) + ' : ' + formatTime(time.minutes()) + ' : ' + formatTime(time.seconds());
}

export {
    getTime
};