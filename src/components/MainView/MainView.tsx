import { StatusBar } from 'expo-status-bar';
import { Image, ImageSourcePropType, View } from 'react-native';
import { CustomButton, RegularText, TitleText } from '../';
import { homeStyles as styles } from './MainView.styles';

interface MainViewProps {
  img: ImageSourcePropType;
  title: string;
  text: string;
  navigateNext: () => void;
  navigateSkip: () => void;
}

export function MainView({
  img,
  title,
  text,
  navigateNext,
  navigateSkip,
}: MainViewProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        <TitleText>{title}</TitleText>
        <RegularText>{text}</RegularText>
        <CustomButton title="Next" variant="outline" onPress={navigateNext} />
        <CustomButton title="Skip" variant="ghost" onPress={navigateSkip} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

export default MainView;
