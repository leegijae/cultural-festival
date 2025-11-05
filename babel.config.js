module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      ['module-resolver', { alias: { '@': './' } }],
      'react-native-reanimated/plugin', // (사용 중이면) 항상 마지막
    ],
  };
};