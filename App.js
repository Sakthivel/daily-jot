import React from 'react';
import { StyleSheet, Text, TextInput, View, Modal, Pressable, TouchableOpacity, Image, FlatList } from 'react-native';

export default class Notifications extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
			title: '',
			text: '',
			image: '',
			isAdd: '',
			data: [
				{ id:1, title:"Operating System Notes", text:"An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer.", attachment:"os.webp", createDate: "2022-12-31T00:08:38Z"},
				{ id:2, title:"Computer Networks", text:"A computer network is a set of devices connected through links. A node can be computer, printer, or any other device capable of sending or receiving the data", attachment:"network.jpg", createDate: "2022-12-31T10:08:38Z"},
				{ id:3, title:"Business News", text:"Business News: Get latest stock share market news, financial news, budget 2022 news, economy news, company news, politics news, India news, breaking news, Indian economy news at Business Standard. Catch Nifty Sensex Live updates.", attachment:"bn.jpg", createDate: "2022-12-29T17:08:38Z"},
				{ id:4, title:"Tech News Today", text:"India Today Technology provides latest technology news, phone launch details, smartphone reviews, news on laptops, cameras, whatsapp and apps, Get latest technology news on gadgets launches in India such as Mobile Phone, Latest Smartphones and Computers.", attachment:"tech.webp", createDate: "2022-12-28T11:08:38Z"},
				{ id:5, title:"Healthy Tips", text:"Get regular checkups, Exercise, Eat healthy foods, have fruits daily, avoid stress etc.,", attachment:"hl.png", createDate: "2022-12-23T11:08:38Z"},
				{ id:6, title:"Programming Languages", text:"A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.", attachment:"", createDate: "2022-12-20T11:08:38Z"},
				{ id:7, title:"Blockchain", text:"Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. A blockchain database stores data in blocks that are linked together in a chain.", attachment:"", createDate: "2022-11-16T11:08:38Z"},
				{ id:8, title:"Web3", text:"Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.", attachment:"", createDate: "2022-08-12T12:08:38Z"},
				{ id:9, title:"History of Film Technology", text:"The history of film technology traces the development of techniques for the recording, construction and presentation of motion pictures. When the film medium came about in the 19th century, there already was a centuries old tradition of screening moving images through shadow play and the magic lantern that were very popular with audiences in many parts of the world.", attachment:"", createDate: "2022-04-23T01:08:38Z"}
			]
		};

		this.setModalVisible = (visible, data, isAdd) => {
			if (isAdd) {
				this.setState({
					modalVisible: visible,
					title: '',
					text: '',
					image: '',
					isAdd: true
				});

			} else {
				this.setState({
					modalVisible: visible,
					title: data.title,
					text: data.text,
					image: data.image,
					isAdd: ''
				});
			}
		};
	}

	render() {
		const { modalVisible, data, title, text, image, isAdd, onChangeText } = this.state;

		return (
			<>
				<View style={styles.headerStyle}>
					<Text style={styles.textElement}>Daily Jot</Text>
				</View>

				<View>
					<Modal
						animationType="fade"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
							this.setModalVisible(!modalVisible, {}, false);
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								{ !isAdd ? 
									<>
										<Text style={styles.name}>{title}</Text>
										<Text style={styles.lineHeightChange}>{text}</Text>
										{image}
									</> :
									<>
										<Text style={styles.labelText}>Jot Title</Text>
										<TextInput
											style={styles.input}
											value="Today's Task"
											onChangeText={onChangeText}/>
										<Text style={styles.labelText}>Jot</Text>
										<TextInput
											multiline={true}
											numberOfLines={10}
											value="Submit networking assignment, study data mining techniques etc.,"
											onChangeText={onChangeText}
											style={[styles.input, styles.textArea]}/>
									</>
								}
								
								<Pressable
									style={[styles.button, styles.buttonClose]}
									onPress={() => this.setModalVisible(!modalVisible, {}, false)}
									>
									<Text style={styles.textStyle}>{ isAdd ? 'Save' : 'Close' }</Text>
								</Pressable>
							</View>
						</View>
					</Modal>
				</View>

				<FlatList
					style={ styles.root }
					data={ data }
					extraData={ this.state }

					ItemSeparatorComponent={() => {
						return (
							<View style={styles.separator}/>
						)
					}}

					keyExtractor={(item)=>{
						return item.id;
					}}

					renderItem={(item) => {
						const Notification = item.item;
						let attachment = <View/>;
						let attachmentOnModal = <View/>;
						let mainContentImageStyle;
						let createDate = processDateObj(Notification.createDate);

						if (Notification.attachment) {
							mainContentImageStyle = styles.mainContent;
							attachment = <Image
											style={styles.attachment}
											source={require('./assets/img/' + Notification.attachment)}
										/>;
							attachmentOnModal = <Image
													style={styles.attachmentOnModal}
													source={require('./assets/img/' + Notification.attachment)}
												/>;
						}

						return (
							<View style={ modalVisible ? [styles.container, styles.disableScroll] : styles.container}>
								<View style={styles.content}>
									<View style={[styles.mainContentStyle, mainContentImageStyle]}>

										<Pressable
											onPress={() => this.setModalVisible(true, {
												"title": Notification.title,
												"text": Notification.text,
												"image": attachmentOnModal
											}, false)}
										>
											<View style={styles.text}>
												<Text style={styles.name}>{Notification.title}</Text>
												<Text style={styles.description}>{Notification.text}</Text>
											</View>
										</Pressable>

										<Text style={styles.timeAgo}>
											{createDate}
										</Text>

									</View>

									{attachment}

								</View>
							</View>
						);
					}}
				/>

				<View style={ modalVisible ? [styles.footerStyle, styles.disableScroll] : styles.footerStyle}>
					<Pressable
						onPress={() => this.setModalVisible(true, {}, true)}
					>
						<Text style={styles.textElement}>+ Add New Jot</Text>
					</Pressable>
				</View>
			</>
		);
	}
}

const processDateObj = (cdate) => {
    let createdDate = cdate,
      dateObj,
      savedDate,
      currentDate,
      savedUTCDate,
      currentUTCDate,
      timeDiff,
      diffDays,
      dayNumber,
      dateLabel,
      dateOptions,
      weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Today', 'Yesterday']

    dateObj = new Date(createdDate);
    savedDate = new Date((createdDate).split('T')[0]);
    currentDate = new Date();
    savedUTCDate = new Date(savedDate.getUTCFullYear(), savedDate.getUTCMonth(), savedDate.getUTCDate());
    currentUTCDate = new Date(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate());
    timeDiff = Math.abs(currentUTCDate.getTime() - savedUTCDate.getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
    dayNumber = savedUTCDate.getDay();

    if (diffDays <= 0) {
      dateLabel = weekdayArray[7];
    } else if (diffDays === 1) {
      dateLabel = weekdayArray[8];
    } else if (diffDays < 7) {
      dateLabel = weekdayArray[dayNumber];
    } else {
      dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      dateLabel = savedUTCDate.toLocaleDateString('en-IN', dateOptions);
    }

    return dateLabel;
}



const styles = StyleSheet.create({
	root: {
		backgroundColor: "#f9f9f9",
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 42,
		marginBottom: 42
	},

	container: {
		flexDirection: 'row',
		alignItems: 'flex-start'
	},

	disableScroll: {
		opacity: '0.1'
	},

	mainContentStyle: {
		borderBottomWidth: 0,
		paddingTop: 15,
		paddingBottom: 15,
		borderColor: "#ccc",
	},

	text: {
		marginBottom: 5,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

	description: {
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: 'inline',
		display: '-webkit-box',
		WebkitBoxOrient: 'vertical',
		WebkitLineClamp: 3,
		color: "#343434"
	},

	content: {
		flex: 1
	},

	mainContent: {
		marginRight: 60
	},

	img: {
		height: 50,
		width: 50,
		margin: 0
	},

	attachment: {
		position: 'absolute',
		right: 0,
		height: 50,
		width: 50,
		top: 45
	},

	attachmentOnModal: {
		height: 50,
		width: 50,
		marginBottom: 10
	},

	separator: {
		height: 1,
		backgroundColor: "#CCCCCC"
	},

	timeAgo:{
		fontSize: 12,
		paddingTop: 2,
		color: "#D72"
	},

	name:{
		fontSize: 18,
		paddingBottom: 4,
		color: "#1E90FF"
	},

	headerStyle: {
		width: '100%',
		height: 42,
		backgroundColor: '#3D6DCC',
		position: 'fixed',
		zIndex: 9999
	},

	footerStyle: {
		width: '100%',
		height: 42,
		backgroundColor: '#3D6DCC',
		position: 'fixed',
		zIndex: 9999,
		bottom: 0
	},

	textElement: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 18,
		fontSize: 25,
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 10,
		paddingRight: 10,
		fontWeight: 700
	},

	modal: {
		position: 'absolute',
		zIndex: 999,
		padding: 30,
		width: '100%',
		height: '100%'
	},

	centeredView: {
		flex: 1,
		justifyContent: "center",
		marginTop: 42
	},

	modalView: {
		margin: 20,
		backgroundColor: "#FFF",
		borderRadius: 20,
		padding: 35,
		shadowColor: "#343434",

		shadowOffset: {
			width: 0,
			height: 2
		},

		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},

	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},

	buttonOpen: {
		backgroundColor: "#F194FF",
	},

	buttonClose: {
		backgroundColor: "#3D6DCC",
	},

	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},

	modalText: {
		marginBottom: 15,
		textAlign: "center"
	},

	lineHeightChange: {
		lineHeight: '2'
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderColor: "#3D6DCC"
	},

	textArea: {
		height:200,
		textAlignVertical: 'top'
	},

	labelText: {
		fontSize: 14,
		fontWeight: 700,
		paddingLeft: 10,
		color: '#343434'
	}
}); 