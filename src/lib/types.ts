export interface CalendarProps extends WeekItemProps, CalendarHeaderProps {}

export type WeekItemProps = {
  date: Date;
};

export type CalendarHeaderProps = {
  language: Language;
};

export type Language = 'ja' | 'en';
