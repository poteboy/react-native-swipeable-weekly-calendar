# react-native-swipeable-weekly-calendar

[![Version](https://img.shields.io/npm/v/react-native-swipeable-weekly-calendar.svg)](https://www.npmjs.com/package/react-native-swipeable-weekly-calendar)

![GIF](https://user-images.githubusercontent.com/59927325/150681203-3543a806-2b7d-47b7-b1bc-6f21063d0c43.gif)

## Installation

```sh
$ npm install react-native-swipeable-weekly-calendar
```

or

```sh
$ yarn add react-native-swipeable-weekly-calendar
```

## Usage

```ts
export const App: FC = () => {
  const [date, setDate] = useState(new Date());

  const pressDate = useCallback(
    (d: Date) => {
      setDate(d);
    },
    [setDate],
  );

  return (
    <View>
      <CalendarComponent
        date={date}
        onPressDate={pressDate}
        showMonth
        language="ja" // ja | en | ko | es
      />
    </View>
  );
};
```

## Component API

| Props         | Type     | Required |
| ------------- | -------- | -------- |
| date          | Date     | true     |
| language      | string   | false    |
| selectedColor | string   | false    |
| showMonth     | boolean  | false    |
| onPressDate   | function | true     |
