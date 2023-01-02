/*
// import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//  function onPressButton() {
//   alert('You tapped the button!')
// }

// const dailyJot = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.hello}>Hello, World</Text>
//       <TouchableOpacity onPress={onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//     </View>
//   );
// };
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   hello: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

// export default dailyJot;


// import React, { Component } from "react";
// import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

// class dailyJot extends Component {
//   state = {
//     modalVisible: false
//   };

//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             this.setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <Text style={styles.modalText}>Hello World!</Text>
//               <Pressable
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => this.setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>Hide Modal</Text>
//               </Pressable>
//             </View>
//           </View>
//         </Modal>
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => this.setModalVisible(true)}
//         >
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center"
//   }
// });

// export default dailyJot;
*/

import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import App from './App';

class dailyJot extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };

    setTimeout(function(){
      this.setState({ loading: false});
    }.bind(this), 3000);
  }

  render() {
	return (
		<>
			{ this.state.loading ? 
				<View style={[styles.container, styles.horizontal]}>
					<Text style={styles.textElement}>Welcome to Daily Jot!</Text>
					<ActivityIndicator size="large" color="#D72"/>
				</View> : 
				<App />
			}
		</>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		color: '#f8f8f1'
	},
	horizontal: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: 10
	},
	textElement: {
		fontSize: 26,
		paddingBottom: 20,
		color: "#3D6DCC"
	}
});

export default dailyJot;

