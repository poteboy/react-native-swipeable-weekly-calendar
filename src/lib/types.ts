export interface CalendarProps extends DefalultProps, CalendarHeaderProps {}

export type WeekItemProps = Pick<DefalultProps, 'date'> & {
  selectedDate: boolean;
  onSelectDate: (d: Date) => void;
  selectedColor?: string;
};

export type DefalultProps = {
  date: Date;
  selectedColor?: string;
};

export type CalendarHeaderProps = {
  language: Language;
};

export type Language = 'ja' | 'en';
