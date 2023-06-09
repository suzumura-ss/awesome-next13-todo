const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = createJestConfig({
  moduleNameMapper: {
    '.+\\.(css|style|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.cjs',
    ...paths,
  },
  testPathIgnorePatterns: ['node_modules', '\\.next', '<rootDir>.*/public', '__tests__/utils.tsx', '__e2e__/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/jest.setup.cjs'],
  testRegex: ['(?!.*\\.stories\\..*$)(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],
});
