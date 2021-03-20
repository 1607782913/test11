function getStyle(obj, name) {
    return getComputedStyle(obj, null)[name];
}
var timer;
function move(obj, speed, target, attr) {
    clearInterval(timer);
    var firstvalue = parseInt(getStyle(obj, attr));
    timer = setInterval(function () {
        if (firstvalue > target && speed > 0) {
            speed = -speed;
        }
        var oldvalue = parseInt(getStyle(obj, attr));
        var newvalue = oldvalue + speed;
        if ((newvalue > target && speed > 0) || (speed < 0 && newvalue < target)) {
            newvalue = target;
        }
        obj.style[attr] = newvalue + "px";
        if (newvalue == target) {
            clearInterval(timer);
        }
    }, 30);
}