import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface CharacterStatusProps {
  status: string | undefined;
}

interface StatusColors {
  alive: string;
  dead: string;
  unknown: string;
}

export function CharacterStatus({ status }: CharacterStatusProps): JSX.Element {
  const [color, setColor] = useState('gray');

  useEffect(() => {
    if (status) {
      const formatedStatus = status.toLowerCase().trim();
      const statusColor: StatusColors = {
        alive: 'green',
        dead: 'red',
        unknown: 'gray',
      };
      setColor(statusColor[formatedStatus as keyof StatusColors]);
    }
  }, [color, status]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
      }}
    >
      <View
        style={{ backgroundColor: color, borderRadius: 15, width: 12, height: 12, marginRight: 10 }}
      />
      <Text style={{ fontSize: 14 }}>{status}</Text>
    </View>
  );
}
