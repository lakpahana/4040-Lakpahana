export type booking = {
    id: number,
    name: string,
    phone: string,
    date: Date,
    status: bookingStatus
}

export enum bookingStatus {
    pending = 'pending',
    confirmed = 'confirmed',
    paid = 'paid',
    cancelled = 'cancelled'
}

