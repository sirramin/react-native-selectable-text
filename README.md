
# react-native-selectable-text

This is the updated version of public fork `@alentoma/react-native-selectable-text.`

## armata99: what I have done?
- new project structure and updated dependencies
- rewrote the demo with newer react-native version
- fixed a few small issues
- added a feature I needed
- scrambled the heck out of this document

## Demo

### Android

<img src="https://github.com/Astrocoders/react-native-selectable-text/raw/master/Demo/demo_android.gif" width="350px" />

### iOS

<img src="https://user-images.githubusercontent.com/16995184/54835973-055e7480-4ca2-11e9-8d55-c4f7a67c2847.gif" width="350px" />

## Usage

```javascript
import {SelectableText} from '@armata99/react-native-selectable-text';

// Use normally, it is a drop-in replacement for react-native/Text
<SelectableText
  menuItems={["Foo", "Bar"]}
  /* 
    Called when the user taps in a item of the selection menu:
    - eventType: (string) is the label
    - content: (string) the selected text portion
    - selectionStart: (int) is the start position of the selected text
    - selectionEnd: (int) is the end position of the selected text
   */
  onSelection={({ eventType, content, selectionStart, selectionEnd }) => {}}
  value="I crave star damage"
/>;
```

## Getting started

I have **NOT** published this on NPM. Install it with repo URL if you need it.

### ~~with npm~~
```bash
npm i @armata99/react-native-selectable-text
```

### ~~with yarn~~
```bash
yarn add @armata99/react-native-selectable-text
```


### ~~Manual installation~~ (armata99: "Nope! Not necessary!")

Create react-native.config.js in the root directory and execlude @armata99/react-native-selectable-text from linking

```javascript
module.exports = {
    dependencies: {
        "@alentoma/react-native-selectable-text": {
            platforms: {
                android: null, // disable Android platform, other platforms will still autolink if provided
                ios: null // disable IOS platform, other platforms will still autolink if provided
            }
        }
    }
}

```

#### ~~iOS - Binary Linking (Alternative 1)~~

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `@alentoma/react-native-selectable-text` and add `RNSelectableText.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSelectableText.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### iOS - Pods (Alternative 2) (armata99: "just do this one")

1. Add `pod 'RNSelectableText', :path => '../node_modules/@armata99/react-native-selectable-text/ios/RNSelectableText.podspec'` to your projects podfile
2. run `pod install`

#### ~~Android~~ (armata99: "you don't need to do this part if autolinking is available")

1. Open up `android/app/src/main/java/[...]/MainActivity.java`

- Add `import com.alentoma.selectabletext.RNSelectableTextPackage;` to the imports at the top of the file
- Add `new RNSelectableTextPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-selectable-text'
   project(':react-native-selectable-text').projectDir = new File(rootProject.projectDir, 	'../node_modules/@alentoma/react-native-selectable-text/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     implementation project(':react-native-selectable-text')
   ```

## Props
|          Name          | Description                                                                                                                   | Type                                                                                       |    Default     |
|:----------------------:|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|:--------------:|
|        `value`         | Text content                                                                                                                  | `string`                                                                                   |      `""`      |
|     `onSelection`      | Called when the user taps in a item of the selection menu                                                                     | `({ eventType: string, content: string, selectionStart: int, selectionEnd: int }) => void` |   `() => {}`   |
|      `menuItems`       | Context menu items                                                                                                            | `array(string)`                                                                            |      `[]`      |
|        `style`         | Additional styles to be applied to text                                                                                       | `Object`                                                                                   |     `null`     |
|      `highlights`      | Array of text ranges that should be highlighted with an optional id                                                           | `array({ id: string, start: int, end: int })`                                              |      `[]`      |
|    `highlightColor`    | Highlight color                                                                                                               | `string`                                                                                   |     `null`     |
|   `onHighlightPress`   | Called when the user taps the highlight                                                                                       | `(id: string) => void`                                                                     |   `() => {}`   |
|   `appendToChildren`   | Element to be added in the last line of text                                                                                  | `ReactNode`                                                                                |     `null`     |
|    `TextComponent`     | Text component used to render `value`                                                                                         | `ReactNode`                                                                                |    `<Text>`    |
|    `textValueProp`     | Text value prop for TextComponent. Should be used when passing TextComponent. Defaults to 'children' which works for `<Text>` | `string`                                                                                   |  `'children'`  |
|  `textComponentProps`  | Additional props to pass to TextComponent                                                                                     | `object`                                                                                   |     `null`     |

