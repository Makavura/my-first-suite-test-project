module.exports = function(config) {
  config.set({
    spec: [
      // Add your files here, this is just an example:
      {pattern: 'test/**/*.ts', mutated: true, included: false},
      'test/**/*.ts'
    ],
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: ['typescript'],
    testFramework: "mocha",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    mochaOptions: {
			spec: ['test/**/*.spec.ts'],
                        require: ['ts-node/register']
    },
    maxConcurrentTestRunners: 2
  });
};
