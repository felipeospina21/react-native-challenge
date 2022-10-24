import { StyleProp, View, ViewStyle } from "react-native";

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>
}

export function Container(props: ContainerProps){
  return <View {...props}>{props.children}</View>
}