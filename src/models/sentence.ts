import { Word } from "./word";

export interface Sentence {
    id?: string
    text?: string;
    sentenceArray?: Array<Word>
}