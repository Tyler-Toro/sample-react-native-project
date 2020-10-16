import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, Dimensions, } from "react-native";

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {alert("WELCOME ! 😎")}

  return(
    <SafeAreaView style={{flex: 1, }}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{margin: 20, fontSize: 100, }}>🌍</Text>
        <View style={{
          backgroundColor: "lightgray", 
          margin: 5, 
          borderRadius: 5,
          paddingHorizontal: 10,
          width: Dimensions.get("window").width * 0.90, 
        }}>
          <TextInput
            value={email}
            placeholder="Please enter e-mail"
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={{
          backgroundColor: "lightgray", 
          margin: 5, 
          borderRadius: 5,
          paddingHorizontal: 10,  
          width: Dimensions.get("window").width * 0.90, 
        }}>
          <TextInput
            value={password}
            placeholder="Please enter password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <Button title="Sign In" onPress={login}/>
      </View>
    </SafeAreaView>
  )
}

export default App;