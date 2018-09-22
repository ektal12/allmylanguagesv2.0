import { SentenceElement } from "./word";

export interface Sentence {
    id?: string
    sentenceText?: string;
    sentenceArray?: Array<SentenceElement>
}