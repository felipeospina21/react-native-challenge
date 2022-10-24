import { View, Image } from "react-native";
import { Container, CustomButton, RegularText, TitleText } from "../../components";
import img3 from '../../assets/img3.png'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { thirdStyles as styles} from './Third.styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Third'>

export default function ThirdView({ navigation }: Props){
  return(
    <View>
      <Image source={img3} style={styles.image}/>
      <Container style={ styles.innerContainer}>
        <TitleText>{'Third Title'}</TitleText>
        <RegularText>{'aorsitnarsotrestnr'}</RegularText>
        <CustomButton title='Get started' variant='primary' onPress={()=> navigation.navigate('Home')} />
      </Container>
    </View>
  )
}