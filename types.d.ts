export declare type Param = string | number;
export interface Ago {
    in: 'seconds' | 'minutes' | 'hours' | 'days';
    string: string;
}
export interface SecondsAgoReturnObject extends Ago {
    seconds: number;
}
export interface MinutesAgoReturnObject extends Ago {
    minutes: number;
    seconds: number;
}
export interface HoursAgoReturnObject extends Ago {
    minutes: number;
    hours: number;
}
export interface DaysAgoReturnObject extends Ago {
    days: number;
    hours: number;
}
export declare type TimeAgoReturnObject = SecondsAgoReturnObject | MinutesAgoReturnObject | HoursAgoReturnObject | DaysAgoReturnObject;
