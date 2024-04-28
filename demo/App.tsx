import React from 'react';
import {View, StyleSheet, ScrollView, TextStyle} from 'react-native';
import {SelectableText} from '@armata99/react-native-selectable-text';
import { Dimensions } from "react-native";
import HTML, {CustomTextualRenderer} from "react-native-render-html";

const fSize = 30
const pTag: TextStyle = {
  lineHeight: fSize * 1.7,
  fontSize: fSize,
  color: "white",
  paddingBottom: 5,
  textAlign: "left"
}

const classes = {
  paddingLeft: fSize * 0.9,
  paddingRight: fSize * 0.95,
  backgroundColor: "black",
  minWidth: Dimensions.get("window").width,
  minHeight: Dimensions.get("window").height,
  maxWidth: "99%",
  flex: 1
}

const htmlContent = `<div id="chapter-content" class="chapter" style="font-family: Arial, sans-serif, serif; font-size: 18px; line-height: 160%;">
              <p>Chapter 2165: My Little Heart
              </p>
              <p>Translator: EndlessFantasy Translation  Editor: EndlessFantasy Translation</p>
              <p>“Second Uncle, Second Uncle… Put me down…” Little tangyuan  cried out in her baby voice.              </p>
              <p>Lu Jingli looked determined. “No way! I’m telling you even if God were here today, He wouldn’t be able to save you!”

              </p>
              <p>Little tangyuan  begged pitifully, “Second Uncle, I know I’m wrong! Please don’t be angry, okay?”

              </p>
              <p>Lu Jingli was not moved at all. “Don’t come at me with this. You’ve already said such things over eight hundred times!”

              </p>
              <p>Little tangyuan  then said, “Second Uncle, you can’t be angry!”

              </p>
              <p>Lu Jingli then replied, “Why can’t I be angry? I’m about to be angered to death by you!”

              </p>
              <p>Solemness filled the  tangyuan ‘s delicate little face as she said earnestly, “Even though you look very handsome when you’re angry, Second Uncle, you look even more handsome when you’re not angry!”
              </p>
              <p>Alen</p>
        </div>`;


const DivRenderer: CustomTextualRenderer = function DivRenderer({ TDefaultRenderer, ...props }) {
  let txt = "";
  Array.from(props.tnode.domNode?.children ?? []).forEach((child: any) => {
    if (child.data)
      txt = child.data;
  })

  return (
    <SelectableText
      textComponentProps={{ multiline: true }}
      menuItems={["Replace", "Cancel"]}
      onSelection={console.log}
      highlightColor={"red"}
      highlights={[{ start: 0, end: 10, id:"test" }]}
      style={pTag}
      value={txt}
     prependToChild={''}/>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <HTML
          contentWidth={Dimensions.get('window').width}
          classesStyles={{chapter: classes}}
          source={{html:  htmlContent}}
          renderers={{p: DivRenderer}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FF0000"
  },
  instructions: {
    textAlign: "center",
    marginBottom: 5,
    color: "#0000FF"
  }
});
