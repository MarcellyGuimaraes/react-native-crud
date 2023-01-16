import { FlatList, View, Alert } from 'react-native'
import { Avatar, ListItem, Button, Icon } from 'react-native-elements'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function UserList(props) {
  const { state } = useContext(UserContext)
  const confirmUserDeletion = (user) => {
    Alert.alert('Excluir usuário', 'Deseja excluir usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('Delete' + user.name)
        },
      },
      { text: 'Não' },
    ])
  }

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
      >
        <Avatar source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <>
          <Button
            type="clear"
            icon={<Icon name="edit" size={25} color="orange" />}
            onPress={() => props.navigation.navigate('UserForm', user)}
          />
          <Button
            onPress={() => confirmUserDeletion(user)}
            type="clear"
            icon={<Icon name="delete" size={25} color="red" />}
          />
        </>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}
