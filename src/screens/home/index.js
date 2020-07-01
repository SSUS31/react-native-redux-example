/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/home';


class Home extends React.Component{
    state = {
        title: null,
        description:null
    }

    onChangeTitle = (text) => {
        this.setState({
            title:text
        })
    }

    onChangeDescription = (text) => {
        this.setState({
            description:text
        })
    }

    onSubmit = () => {
        let task = {
            id: Math.random(),
            title:this.state.title,
            description:this.state.description
        }
        this.setState({
            title: null,
            description:null
        })
        if(task.title != null) {
            this.props.addTask(task)
        }
    }

  render(){
    return(
      <View>

          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.onChangeTitle(text)}
            value={this.state.title}
            placeholder='enter title'
            />

        <TextInput
            style={styles.textInputStyle}
            onChangeText={text => this.onChangeDescription(text)}
            value={this.state.description}
            placeholder='enter des'
            />

            <Button title='Submit' onPress={() => this.onSubmit()} />


            <Button 
            title='Open list'
            onPress={() => this.props.navigation.navigate('List')}
            
            />

        <Text>Total tasks count: {this.props.homeReducer.tasks.length}</Text>
        <Text style={{fontSize:24}}>Delete status:   {this.props.homeReducer.deleteStatus}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#00000050'
    },
    textInputStyle:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin:20
    }
})

const mapStateToProps = (state) => {
    return{
        homeReducer:  state.homeReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTask: (task) => {dispatch(addTask(task))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
