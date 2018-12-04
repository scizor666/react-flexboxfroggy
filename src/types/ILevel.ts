import IInstructions from "./IInstructions";

interface ILevel {
    current: number,
    max: number,
    instructions: IInstructions,
    prependCode: string,
    answerHeight: number,
    style: any,
    board: string[],
    selector?: string
}

export default ILevel;
