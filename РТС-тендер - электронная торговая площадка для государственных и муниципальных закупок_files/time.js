var _SERVER_DATE_TIME = new Date();
var _CLIENT_TIMER_TICK_HANDLER = null;
// Погрешность не слишком большая и браузер не слишком напрягает.
// Плюс делаем что-то наподобие анимации, чтобы пользователь видел, что время идет.
var _TIME_INTERVAL = 1000;

function startServerDate(serverDateTime, clientTimerTickHandler) {
    if (serverDateTime === undefined || serverDateTime == null)
        throw "serverDateTime unknown";

    if (clientTimerTickHandler === undefined || clientTimerTickHandler == null)
        throw "clientTimerTickHandler unknown";

    _SERVER_DATE_TIME = serverDateTime;
    _CLIENT_TIMER_TICK_HANDLER = clientTimerTickHandler;

    setInterval(_timeTickHandlerInternal, _TIME_INTERVAL);

    _CLIENT_TIMER_TICK_HANDLER(_SERVER_DATE_TIME);
}

function getDateString(date) {
    if (date === undefined || date == null)
        return '';
        
    var day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    var hours = date.getHours() < 10 ? "0" + date.getHours().toString() : date.getHours().toString();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
    var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    //return day + "." + month + "." + date.getFullYear() + " г." + " " + hours + (date.getSeconds() % 2 == 0 ? ":" : " " ) + minutes + ' (по московскому времени)' +  days[ date.getDay() ];
    return days[ date.getDay() ] + " "+ day + "." + month + "." + date.getFullYear() + " г.";
}

function getTimeString(date) {
    if (date === undefined || date == null)
        return '';
        
    var day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    var hours = date.getHours() < 10 ? "0" + date.getHours().toString() : date.getHours().toString();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
    var days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    //return day + "." + month + "." + date.getFullYear() + " г." + " " + hours + (date.getSeconds() % 2 == 0 ? ":" : " " ) + minutes + ' (по московскому времени)' +  days[ date.getDay() ];
    return hours + (date.getSeconds() % 2 == 0 ? ":" : " " ) + minutes + " ";
}

function _timeTickHandlerInternal() {
    if (_SERVER_DATE_TIME === undefined || _SERVER_DATE_TIME == null)
        throw "serverDateTime unknown";

    if (_CLIENT_TIMER_TICK_HANDLER === undefined || _CLIENT_TIMER_TICK_HANDLER == null)
        throw "clientTimerTickHandler unknown";

    _SERVER_DATE_TIME.setMilliseconds(_TIME_INTERVAL);

    _CLIENT_TIMER_TICK_HANDLER(_SERVER_DATE_TIME);
}