import { FlatList, Text, View } from 'react-native'
import users from '../data/users'
import { Avatar, ListItem, Button, Icon } from 'react-native-elements'

export default function UserList(props) {
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
        data={users}
        renderItem={getUserItem}
      />
    </View>
  )
}
