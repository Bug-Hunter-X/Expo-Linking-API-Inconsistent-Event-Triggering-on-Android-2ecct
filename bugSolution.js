const Linking = require('expo-linking');

Linking.addEventListener('url', (url) => {
  // Handle the URL
  console.log('Received URL from Linking.addEventListener:', url);
});

// additional check to handle cases when app is in the background
const handleDeepLink = async () => {
  let initialUrl = await Linking.getInitialURL();

  if (initialUrl) {
    console.log('Received URL from Linking.getInitialURL:', initialUrl);
    // Handle initial URL
  }
};

handleDeepLink();

// ... rest of your code