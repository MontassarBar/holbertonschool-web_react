interface MajorCredits {
    credits: number
    brand: "maj"
}

interface MinorCredits {
    credits: number
    brand: "min"
}

const sumMajorCredits = function (subject1: MajorCredits, subject2:MajorCredits): number {
    return subject1.credits + subject2.credits
}

const sumMinorCredits = function (subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits
}
