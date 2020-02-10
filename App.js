import React from 'react';
import {StyleSheet, Button, View, Text, ActivityIndicator} from 'react-native';
import {TextField} from 'react-native-material-textfield';
const NUMBER_OF_REQUIRED_FIELDS = 3;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isCompleted: false,
      form: {},
    };
  }

  submit = () => {
    if (this.isDisabled) {
      return;
    }
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({isLoading: false, isCompleted: true});
    }, 2000);
  };

  updateField(field) {
    return value => this.setState({form: {...this.state.form, [field]: value}});
  }

  get thankYou() {
    return 'Thank you';
  }

  reset = () => this.setState({isCompleted: false, form: {}});
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.centerScreen}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if (this.state.isCompleted) {
      return (
        <View
          accessible={true}
          style={styles.centerScreen}
          accessibilityLabel="completed screen">
          <Text
            accessibilityLabel="application submitted title"
            accessible={true}
            style={styles.text}>
            Application Submitted!
          </Text>
          <Text
            accessible={true}
            accessibilityLabel="thank you message"
            style={[styles.text]}>
            {this.thankYou}
          </Text>
          <View style={styles.backButton}>
            <Button
              title="Go Back"
              onPress={this.reset}
              accessibilityLabel="pressback"
            />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Button
          accessibilityLabel="submit button"
          accessible={true}
          onSubmitEditing={this.submit}
          title="Submit"
          onPress={this.submit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  emailInput: {
    marginBottom: 40,
  },
  backButton: {
    marginTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  centerScreen: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
