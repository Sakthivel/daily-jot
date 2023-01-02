import React from 'react';
import { Text, TextInput, View, Modal, Pressable, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './style';

export default class Notifications extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
			title: '',
			text: '',
			image: '',
			isAdd: '',
			newTitle: '',
			newJot: '',
			data: [
				{ id:1, title:"Operating System Notes", text:"An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer.", attachment:"os.webp", createDate: "2023-01-02"},
				{ id:2, title:"Computer Networks", text:"A computer network is a set of devices connected through links. A node can be computer, printer, or any other device capable of sending or receiving the data", attachment:"network.jpg", createDate: "2023-01-01"},
				{ id:3, title:"Business News", text:"Business News: Get latest stock share market news, financial news, budget 2022 news, economy news, company news, politics news, India news, breaking news, Indian economy news at Business Standard. Catch Nifty Sensex Live updates.", attachment:"bn.jpg", createDate: "2022-12-29"},
				{ id:4, title:"Tech News Today", text:"India Today Technology provides latest technology news, phone launch details, smartphone reviews, news on laptops, cameras, whatsapp and apps, Get latest technology news on gadgets launches in India such as Mobile Phone, Latest Smartphones and Computers.", attachment:"tech.webp", createDate: "2022-12-28"},
				{ id:5, title:"Healthy Tips", text:"Get regular checkups, Exercise, Eat healthy foods, have fruits daily, avoid stress etc.,", attachment:"hl.png", createDate: "2022-12-23"},
				{ id:6, title:"Programming Languages", text:"A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.", attachment:"", createDate: "2022-12-20"},
				{ id:7, title:"Blockchain", text:"Blockchain technology is an advanced database mechanism that allows transparent information sharing within a business network. A blockchain database stores data in blocks that are linked together in a chain.", attachment:"", createDate: "2022-11-16"},
				{ id:8, title:"Web3", text:"Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.", attachment:"", createDate: "2022-08-12"},
				{ id:9, title:"History of Film Technology", text:"The history of film technology traces the development of techniques for the recording, construction and presentation of motion pictures. When the film medium came about in the 19th century, there already was a centuries old tradition of screening moving images through shadow play and the magic lantern that were very popular with audiences in many parts of the world.", attachment:"", createDate: "2022-04-23"}
			]
		};

		this.setModalVisible = (visible, data, isAdd) => {
			if (isAdd === true) {
				this.setState({
					modalVisible: visible,
					title: '',
					text: '',
					image: '',
					isAdd: true
				});
			} else if (isAdd === 'save') {
				let prevData = this.state.data,
					newId = prevData ? prevData.length + 1 : 1,
					newTitle = this.state.newTitle,
					newJot = this.state.newJot,
					currentDate = new Date(),
					currentUniqueDate = this.getFormatedValue(currentDate.getDate()),
					currentUniqueMonth = this.getFormatedValue(currentDate.getMonth() + 1),
					currentUniqueYear = currentDate.getFullYear(),
					currentFullDate = currentUniqueYear + '-' + currentUniqueMonth + '-' + currentUniqueDate,
					finalData = [{
									id: newId,
									title: newTitle,
									text: newJot,
									attachment: "", 
									createDate: currentFullDate
								}, ...prevData];

				if (newTitle || newJot) {
					this.setState({
						modalVisible: visible,
						title: '',
						text: '',
						image: '',
						isAdd: '',
						newTitle: '',
						newJot: '',
						data: finalData
					});
				} else {
					this.setState({
						modalVisible: visible,
						title: '',
						text: '',
						image: '',
						isAdd: '',
						newTitle: '',
						newJot: ''
					});
				}
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

		this.getFormatedValue = (cdate) => {
			if (cdate.length > 1) {
				return cdate;
			} else {
				return '0' + cdate;
			}
		};

		this.handleNewTitle= (text) => {
			this.setState({ newTitle: text});
		};

		this.handleNewJot= (text) => {
			this.setState({ newJot: text});
		};

		this.processDateObj = (cdate) => {
			let savedDate,
				currentDate,
				savedUniqueDate,
				currentUniqueDate,
				timeDiff,
				diffDays,
				dayNumber,
				dateLabel,
				dateOptions,
				weekdayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Today', 'Yesterday']
		
			savedDate = new Date(cdate);
			currentDate = new Date();
			savedUniqueDate = new Date(savedDate.getFullYear(), savedDate.getMonth(), savedDate.getDate());
			currentUniqueDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
			timeDiff = Math.abs(currentUniqueDate.getTime() - savedUniqueDate.getTime());
			diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
			dayNumber = savedUniqueDate.getDay();
		
			if (diffDays <= 0) {
			  dateLabel = weekdayArray[7];
			} else if (diffDays === 1) {
			  dateLabel = weekdayArray[8];
			} else if (diffDays < 7) {
			  dateLabel = weekdayArray[dayNumber];
			} else {
			  dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
			  dateLabel = savedUniqueDate.toLocaleDateString('en-IN', dateOptions);
			}
		
			return dateLabel;
		}
	}

	render() {
		const { modalVisible, data, title, text, image, isAdd, onChangeText, newTitle, newJot } = this.state;

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
											maxLength={30}
											onChangeText={(text) =>this.handleNewTitle(text)}
											value={newTitle}
										/>
										<Text style={styles.labelText}>Jot</Text>
										<TextInput
											multiline={true}
											numberOfLines={10}
											onChangeText={(text) =>this.handleNewJot(text)}
											value={newJot}
											style={[styles.input, styles.textArea]}/>
									</>
								}
								
								<Pressable
									style={[styles.button, styles.buttonClose]}
									onPress={() => this.setModalVisible(!modalVisible, {}, isAdd ? 'save' : false )}
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
						let createDate = this.processDateObj(Notification.createDate);

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