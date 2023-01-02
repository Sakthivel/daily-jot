import { StyleSheet } from 'react-native';

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
		borderColor: "#CCC",
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
		backgroundColor: "#CCC"
	},

	timeAgo:{
		fontSize: 12,
		paddingTop: 2,
		color: "#D72"
	},

	name:{
		width: '100%',
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
		color: '#FFF',
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
		color: "#FFF",
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

export default styles;