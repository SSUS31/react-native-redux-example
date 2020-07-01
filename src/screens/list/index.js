import React from 'react';
import {
  View,
  Text,
  FlatList,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions/list';


class List extends React.Component{


  
  render(){
    return(
      <View style={{flex:1}}>
          <FlatList
            data={this.props.items}
            renderItem={({ item }) => (
              <View style={{height:60,width:'100%'}}>
                <Text>{item.title}</Text>
                <Button title='Delete' onPress={() => this.props.deleteTask(item.id)} />
              </View>
            )}
            keyExtractor={item => item.id}
      />
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    items:  state.homeReducer.tasks
  }
}

function mapDispatchToProps(dispatch){
  return{
    deleteTask:(id) => { dispatch(deleteTask(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);