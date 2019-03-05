
enum CodeEnum {
    SUCCESS = 10001,
    FAIL = 10002,
    INVALID_PARAMS = 10005,
    SERVER_ERROR = 10006,

    FORBIDDEN = 10010,
}

const CodeEnumMap = new Map<number, string>([
    [CodeEnum.SUCCESS, 'Success'],
    [CodeEnum.FAIL, 'Fail'],
    [CodeEnum.INVALID_PARAMS, 'Invalid Parameters'],
    [CodeEnum.SERVER_ERROR, 'Server Error'],

    [CodeEnum.FORBIDDEN, 'fail'],
]);

export { CodeEnum, CodeEnumMap };
