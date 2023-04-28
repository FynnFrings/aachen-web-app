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
