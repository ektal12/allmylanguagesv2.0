import { Sentence } from "./sentence";

export interface Lesson {
    id?: string
    date?: string;
    shortDescription?: string;
    lessonText?: string;
    sentenceArray?: Array<Sentence>
}
