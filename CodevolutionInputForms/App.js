
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, Switch, Button, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  // TextInput
  const [name, setName] = useState("")
  // Switch
  const [isDarkMode, setIsDarkMode] = useState(false)


  // Login Form
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // Form Validation
  const [errors, setErrors] = useState({})
  const validateForm = () => {
    let errors = {}
    if (!username) {
      errors.username = "Username is required"
    }
    if (!password) {
      errors.password = "Password is required"
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // Form Submission
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("submitted ", username, password)
      setUsername("")
      setPassword("")
      setErrors({})
    }
  }

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* TextInput & Props */}
    //   <TextInput
    //     style={styles.input}
    //     value={name}
    //     onChangeText={setName}
    //     placeholder='email@example.com'
    //     autoCorrect={false}
    //     autoCapitalize='none'
    //   // secureTextEntry
    //   // keyboardType='numeric'
    //   />

    //   {/* Multiline TextInput */}
    //   <TextInput
    //     style={[styles.input, styles.multilineText]}
    //     placeholder='message'
    //     multiline
    //   />

    //   {/* Switch */}
    //   <Text style={styles.text}>My name is {name}</Text>
    //   <View style={styles.swicthContainer}>
    //     <Text style={styles.text}>Dark Mode</Text>
    //     <Switch
    //       value={isDarkMode}
    //       onValueChange={() => setIsDarkMode(prevState => !prevState)}
    //       trackColor={{ false: "#767577", true: "lightblue" }}
    //       thumbColor="#f4f3f4"
    //     />
    //   </View>
    // </SafeAreaView>

    // Login Form
    <KeyboardAvoidingView
      behavior='padding'
      style={loginFormstyles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={loginFormstyles.container}>
        <View style={loginFormstyles.form}>
          <Image source={require("./assets/adaptive-icon.png")} style={loginFormstyles.image} />
          <Text style={loginFormstyles.label}>Username</Text>
          <TextInput
            style={loginFormstyles.input}
            placeholder='Enter your username'
            value={username}
            onChangeText={setUsername}
          />
          {
            errors.username ? <Text style={loginFormstyles.errorText}>{errors.username}</Text> : null
          }
          <Text style={loginFormstyles.label}>Password</Text>
          <TextInput
            style={loginFormstyles.input}
            placeholder='Enter your password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {
            errors.password ? <Text style={loginFormstyles.errorText}>{errors.password}</Text> : null
          }
          <Button title='Login' onPress={
            //Form Submission
            handleSubmit
          } />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}


const loginFormstyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    padding: 10
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: "top"
  },
  swicthContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  }
});
