export class Rational {
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        const gcdValue = this.gcd(this.numerator, this.denominator);
        const normalizedNumerator = this.numerator / gcdValue;
        const normalizedDenominator = this.denominator / gcdValue;
        return new Rational(normalizedNumerator, normalizedDenominator);
    }

    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    equals(numerator: number, denominator: number): boolean {
        const normalizedThis = this.normalize();
        const other = new Rational(numerator, denominator).normalize();
        return normalizedThis.numerator === other.numerator && normalizedThis.denominator === other.denominator;
    }

    equalsRational(r: Rational): boolean {
        const normalizedThis = this.normalize();
        const normalizedR = r.normalize();
        return normalizedThis.numerator === normalizedR.numerator && normalizedThis.denominator === normalizedR.denominator;
    }

    static parseRational(numChars: string[], denomChars: string[]): Rational {
        const numerator = parseInt(numChars.join(''));
        const denominator = parseInt(denomChars.join(''));
        return new Rational(numerator, denominator);
    }

    static parseRationalString(rationalStr: string): Rational {
        const parts = rationalStr.split("/");
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    private gcd(a: number, b: number): number {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }
}
