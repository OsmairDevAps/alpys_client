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
        tabBarActiveTintColor: theme.color.tabBarActiveTintColor,
        tabBarActiveBackgroundColor: theme.color.tabBarActiveBackgroundColor,
        tabBarInactiveTintColor: theme.color.tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: theme.color.tabBarStyle_bg,
          borderColor: theme.color.tabBarStyle_border
        },
        headerTintColor: theme.color.headerTintColor,
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