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
