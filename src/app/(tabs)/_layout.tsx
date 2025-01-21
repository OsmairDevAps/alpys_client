import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router'
import Header from '../components/Header';
import theme from '@/theme';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const user = ""
  // if (!user) {
  //   return <Redirect href="../" />;
  // }

  return (
    <Tabs 
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.color.alpys_tx_primary,
        tabBarActiveBackgroundColor: theme.color.alpys_primary,
        tabBarInactiveTintColor: theme.color.alpys_secondary,
        tabBarStyle: {
          backgroundColor: theme.color.alpys_primary,
          borderColor: theme.color.alpys_secondary
        },
        headerTintColor: '#ffffff',
        headerShown: true,
        header: () => <Header />
      }}
    >
      <Tabs.Screen name='index' 
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen name='orders' 
        options={{
          title: 'Encomendas',
          tabBarIcon: ({ color }) => <TabBarIcon name="send" color={color} />,
        }}
      />
    </Tabs>
  )
}