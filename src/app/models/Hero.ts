import { Gender } from './Gender';

export interface Hero {
    id: number;
    name: string;
    aliases: string[];
    occupation: string;
    gender: Gender;
    height: Height;
    hair: string;
    eyes: string;
    powers: string[];
}

export interface Height {
    ft: number;
    in: number;
}
