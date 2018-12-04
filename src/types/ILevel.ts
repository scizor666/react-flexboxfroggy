import IInstructions from "./IInstructions";

interface ILevel {
    current: any,
    max: number,
    instructions: IInstructions,
    prependCode: string,
    answerHeight: number,
    style: any,
    board: string[],
    selector: string | undefined
}

export default ILevel;
