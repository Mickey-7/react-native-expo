import { useState } from 'react';
import { Modal, StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, StatusBar, ActivityIndicator, Alert } from 'react-native';
import Greet from './components/Greet';
import Box from './components/Box';

// for Image
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
  // for Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      {/* View */}
      {/* <View style={{ flex: 1, backgroundColor: "plum" }}>
        <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
        <View style={{ width: 200, height: 200, backgroundColor: "lightblue" }}></View>
      </View> */}

      {/* Text */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Text>
          <Text style={{ color: "white" }}>Hello</Text>
        </Text>
      </View> */}


      {/* Image */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Image source={{ uri: "https://picsum.photos/300" }} style={{ width: 300, height: 300 }} />
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text>IMAGE TEXT</Text>
        </ImageBackground>
      </View> */}

      {/* Scroll View */}
      {/* <ScrollView style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView> */}

      {/* Button */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press"
          onPress={() => console.log("Button Press")}
          color="midnightblue"
          disabled
        />
      </View> */}

      {/* Pressable */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press"
          onPress={() => console.log("Button Press")}
          color="midnightblue"
        />
        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Text>
        </Pressable>
      </View> */}

      {/* Modal */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button
          title="Press"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType='slide'
          presentationStyle='pageSheet'
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setIsModalVisible(false)} />
          </View>
        </Modal>
      </View> */}

      {/* Status Bar */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden />
      </View> */}

      {/* Activity Indicator */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <ActivityIndicator />
        <ActivityIndicator size="large" color="midnightblue" />
        <ActivityIndicator size="large" color="midnightblue" animating={false} />
      </View> */}

      {/* Alert */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Button title='Alert' onPress={() => Alert.alert("Invalid data!")} />
        <Button title='Alert 2' onPress={() => Alert.alert("Invalid data!", "incorrect DOB")} />
        <Button title='Alert 3' onPress={() => Alert.alert("Invalid data!", "incorrect DOB", [
          {
            text: 'Cancel',
            onPress: () => console.log("Cancel pressed")
          }, {
            text: "OK",
            onPress: () => console.log("OK pressed")
          }
        ])} />
      </View> */}

      {/* Custom Component */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Greet name="Bruce Wayne" />
        <Greet name="Clark Kent" />
      </View> */}

      {/* Styling */}
      {/* <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Text style={{ backgroundColor: "black", color: "white" }}>Inline style sample</Text>
      </View> */}

      {/* StyleSheet API */}
      {/* <View style={styles.container}>
        <Text style={styles.title}>StyleSheet API</Text>
      </View> */}

      {/* Multiple Styles */}
      {/* <View style={stylesMulti.container}>
        <View style={[stylesMulti.box, stylesMulti.lightblueBox]}>
          <Text >Lightblue box</Text>
        </View>
        <View style={[stylesMulti.box, stylesMulti.lightgreenBox]}>
          <Text >Lightgreen box</Text>
        </View>
      </View> */}

      {/* Box Model */}
      {/* Margin -> Border -> Padding -> Content */}
      {/* <View style={boxModel.container}>
        <View style={[boxModel.box, boxModel.lightblueBox]}>
          <Text style={{ borderRadius: 5, backgroundColor: "red" }}>Lightblue box</Text>
        </View>
        <View style={[boxModel.box, boxModel.lightgreenBox]}>
          <Text >Lightgreen box</Text>
        </View>
      </View> */}

      {/* Shadow and Elevation */}
      {/* <View style={shadowElev.container}>
        <View style={[shadowElev.box, shadowElev.lightblueBox, shadowElev.boxShadow]}>
          <Text style={{ borderRadius: 5, backgroundColor: "red" }}>Lightblue box</Text>
        </View>
        <View style={[shadowElev.box, shadowElev.lightgreenBox, shadowElev.androidShadow]}>
          <Text >Lightgreen box</Text>
        </View>
      </View> */}

      {/* Style Inheritance */}
      {/* <View style={styleInheritance.container}>
        <View style={styleInheritance.darkMode}>
          <Text style={styleInheritance.darkModeText}>
            Style Inheritance <Text style={styleInheritance.boldText}>in bold</Text>
          </Text>
        </View>
        <View style={[styleInheritance.box, styleInheritance.lightblueBox, styleInheritance.boxShadow]}>
          <Text style={{ borderRadius: 5, backgroundColor: "red" }}>Lightblue box</Text>
        </View>
        <View style={[styleInheritance.box, styleInheritance.lightgreenBox, styleInheritance.androidShadow]}>
          <Text >Lightgreen box</Text>
        </View>
      </View> */}


      {/* Layout with Flexbox */}
      {/* flex container -> flex items*/}
      {/* main axis -> cross axis */}
      {/* Code Setup */}
      {/* <View style={flexBoxCS.container}>
        <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
        <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
        <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      </View> */}

      {/* Flex */}
      {/* <View style={flex.container}>
        <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
        <Box style={{ backgroundColor: "#b65d1f", flex: 3 }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
        <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
        <Box style={{ backgroundColor: "#6b0803" }}>Box 5</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 6</Box>
        <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
      </View> */}

      {/* Flex Direction */}
      {/* <View style={flexDirection.container}>
        <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      </View> */}

      {/* Justify Content */}
      <View style={justifyContent.container}>
        <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
        <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
        <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      </View>

      {/* Align Items */}

      {/* Flex Wrap */}
      {/* Align Content */}
      {/* Gap */}
      {/* Flex Basis */}
      {/* Flex Shrink */}
      {/* Flex Grow */}
      {/* Relative and Absolute Layout */}
      {/* Dynamic User Interfaces */}
      {/* Dimensions API */}
      {/* Dimensions API Drawback */}
      {/* useWindowDimensions */}
      {/* SafeAreaView */}
      {/* Platform Specific Code */}
    </>

  );
}

// for StyleSheet API
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  title: { color: "white" }
})

// for Multiple Styles
const stylesMulti = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: "pink"
  },
  lightblueBox: {
    backgroundColor: "lightblue",

  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
  }
})

// for Box Model
const boxModel = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 100,
    height: 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5

  },
  lightblueBox: {
    backgroundColor: "lightblue",

  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
  }
})

// for Shadow and Elevation
const shadowElev = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5

  },
  lightblueBox: {
    backgroundColor: "lightblue",

  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }
})

// for Style Inheritance
const styleInheritance = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  darkMode: {
    backgroundColor: "black",
    color: "white"
  },
  darkModeText: {
    color: "white"
  },
  boldText: {
    fontWeight: "bold"
  },
  box: {
    width: 250,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5

  },
  lightblueBox: {
    backgroundColor: "lightblue",

  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10
  }
})

// for Layout w/flexbox code setup
const flexBoxCS = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})

// for flex
const flex = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})

// for flex direction
const flexDirection = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row-reverse",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})

const justifyContent = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red"
  }
})