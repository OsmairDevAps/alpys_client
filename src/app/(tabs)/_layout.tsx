import { FontAwesome } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router'
import Header from '../components/Header';

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
        tabBarActiveTintColor: '#FFFFFF',
        tabBarActiveBackgroundColor: '#1B0D00',
        tabBarInactiveTintColor: '#F97316',
        tabBarStyle: {
          backgroundColor: '#1B0D00',
          borderColor: '#F97316'
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