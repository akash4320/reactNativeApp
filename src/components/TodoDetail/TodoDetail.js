import React from "react";
import { Modal, Button, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";


const todoDetail = props => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.selectedTodo !== null}
      onRequestClose={props.onCloseModel}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {props.selectedTodo ? (
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.selectedTodo.data}
          </Text>
        ) : null}
      </View>
      <View style={{ margin: 10 }}>
        <TouchableOpacity onPress={props.onDelete}>
          <Icons name="trash" color="red" />
        </TouchableOpacity>
        <Button title="Cancel" onPress={props.onCloseModel} />
      </View>
    </Modal>
  );
export default todoDetail;
