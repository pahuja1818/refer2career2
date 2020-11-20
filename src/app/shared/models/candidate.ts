import { UserRole } from './enums';

export class Candidate {
    public id: string;
    public name: string;
    public profileImageUrl: string;
    public mobile: number;
    public email: string;
    public role: UserRole;
    public merchantId: string;

    constructor() {
        this.profileImageUrl = null;
        this.merchantId = null;
    }

    static toJson(user: Candidate) {
        return {
            id: user.id,
            name: user.name,
            profileImageUrl: user.profileImageUrl,
            mobile: user.mobile,
            email: user.email,
            role: user.role,
            merchantId : user.merchantId
        };
    }
}