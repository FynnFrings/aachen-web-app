export interface ITitel {
	titel: string;
	addInfo?: string;
	background: string;
}

export interface InputProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchInput: string;
	placeholder: string;
}

// Interfaces for Blog Page * START *

export interface IBlogCard {
	id: number | string;
	imageUrl?: string;
	title: string;
	author: string;
	htmlContent: string;
	shortDescription: string;
	createdAt: ITimestamp;
}

export interface ITimestamp {
	_seconds: number;
	_nanoseconds: number;
}

// Interfaces for Blog Page * END *

export interface IBusinessCard {
	ownerId: string;
	website?: string;
	latitude: number;
	longitude: number;
	number?: number;
	formattedAddress: string;
	googleUrl: string;
	name: string;
	category: string;
	isEstablishment?: boolean;
	weekdayText?: [];
	location?: string;
	itemId: string;
	couponList: [];
	totalCouponCount: number;
	photoURL?: string;
	bannerImageUrl: string;
	logoImageUrl: string;
	bigPhotoURL?: string;
	email?: string;
	description?: string;
	totalEventCount: number;
	eventList: [];
	createdAt: ITimestamp;
	updatedAt: ITimestamp;
	openingHours?: IOpeningHours[];
	openingHourPeriods?: IOpeningHours[];
	dayList?: IOpeningHours[];
	instagram: string;
	whatsapp: string;
}

export interface IOpeningHours {
	open: IDay;
	close: IDay;
}

interface IDay {
	time: string;
	day: number;
}
