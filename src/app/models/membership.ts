
export class Membership{
    id: number;
    registrationDate: Date = new Date();
    validFrom: Date;
    validThrough: Date;
    serviceLevel: string;
    membershipType: string;
    paymentStatus: string;

}