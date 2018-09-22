import { Sentence } from "./sentence";

export interface Lesson {
    id?: string
    date?: string;
    shortDescription?: string;
    text?: string;
    sentenceArray?: Array<Sentence>
}
