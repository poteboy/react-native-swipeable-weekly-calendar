import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
export interface CalendarProps extends DefalultProps, CalendarHeaderProps {}

export type WeekItemProps = Pick<DefalultProps, 'date'> & {
  selectedDate: boolean;
  onSelectDate: (d: Date) => void;
  selectedColor?: string;
};

export type DefalultProps = {
  date: Date;
  selectedColor?: string;
  onPressDate: (d: Date) => void;
  showMonth?: boolean;
};

export type CalendarHeaderProps = {
  language: Language;
};

export type Language = 'ja' | 'en' | 'ko' | 'es';

export type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;
