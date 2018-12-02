import IInstructions from "./IInstructions";

interface ILevel {
    current: number,
    max: number,
    instructions: IInstructions,
    prependCode: string,
    answerHeight: string,
    style: object,
    board: string[],
    selector: string
}

export default ILevel;
