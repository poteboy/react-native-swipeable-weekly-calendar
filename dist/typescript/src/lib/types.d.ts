import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
export interface CalendarProps extends DefalultProps, CalendarHeaderProps {
}
export declare type WeekItemProps = Pick<DefalultProps, 'date'> & {
    selectedDate: boolean;
    onSelectDate: (d: Date) => void;
    selectedColor?: string;
};
export declare type DefalultProps = {
    date: Date;
    selectedColor?: string;
    onPressDate: (d: Date) => void;
    showMonth?: boolean;
};
export declare type CalendarHeaderProps = {
    language?: Language;
};
export declare type Language = 'ja' | 'en' | 'ko' | 'es';
export declare type ScrollEvent = NativeSyntheticEvent<NativeScrollEvent>;
