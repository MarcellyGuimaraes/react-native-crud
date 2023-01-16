import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function UserForm({ route, navigation }) {
  const [user, setUser] = useState(route.params ? route.params : {})
  const { dispatch } = useContext(UserContext)

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        placeholder="Informe o nome"
        onChangeText={(name) => setUser({ ...user, name })}
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        placeholder="Informe o email"
        onChangeText={(email) => setUser({ ...user, email })}
        value={user.email}
      />
      <Text>Url avatar</Text>
      <TextInput
        style={style.input}
        placeholder="Informe a url do avatar"
        onChangeText={(avatarUrl) => setUser({ ...user, avatarUrl })}
        value={user.avatarUrl}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          })
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
})
