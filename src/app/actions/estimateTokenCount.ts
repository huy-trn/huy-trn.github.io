import { LlamaTokenizer } from "llama-tokenizer-js";
const tokenizer = new LlamaTokenizer();

export const estimateTokenCount = (text: string) => {
    return tokenizer.encode(text).length;
}