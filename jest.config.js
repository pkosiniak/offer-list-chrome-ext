// copy from Expo-React-React-Native project

// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');
// const { withEnzyme } = require('jest-expo-enzyme');

// eslint-disable-next-line no-undef
module.exports = {
   // setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
   transform: {
      '^.+\\.tsx?$': 'ts-jest',
   },
   // moduleNameMapper: pathsToModuleNameMapper(
   //    compilerOptions.paths /*, { prefix: '<rootDir>/' } */
   // )
   projects: [
      // Skipping Node because we want to test DOM presets only
      // withEnzyme(require('jest-expo/ios/jest-preset')),
      // withEnzyme(require('jest-expo/android/jest-preset')),
      // The Enzyme support added to web is different from that added to native, which `withEnzyme` handles
      // Luckily you won't have to do anything special because it reads the platform from
      // `haste.defaultPlatform` of the provided Jest config
      // withEnzyme(require('jest-expo/web/jest-preset')),
   ],
   moduleNameMapper: {
      // '~/(.*)$': '<rootDir>/$1',
      // '@/(.*)$': '<rootDir>/src/$1',
      // '@store/(.*)$': '<rootDir>/src/store/$1',
      // '@components/(.*)$': '<rootDir>/src/components/$1',
      // '@modules/(.*)$': '<rootDir>/src/modules/$1',
   },
};