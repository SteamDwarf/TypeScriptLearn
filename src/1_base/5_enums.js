var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode["IS_LOADING"] = "l";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
var res = {
    message: 'It`s OK',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
//If we use combined enum we can make mistakes, better use one type for values
var action = function (status) {
};
action(0);
var admin = 1 /* Roles.ADMIN */;
