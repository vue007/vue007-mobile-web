
enum UserEnum {
    SUCCESS = 10000,
}

const UserEnumMap = new Map<number, string>([
    [UserEnum.SUCCESS, 'success'],
]);

export { UserEnum, UserEnumMap };
