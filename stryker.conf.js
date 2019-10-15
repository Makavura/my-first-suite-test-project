module.exports = function(config) {
  config.set({
    spec: [
      // Add your files here, this is just an example:
      {pattern: 'test/**/*.js', mutated: true, included: false},
      'test/**/*.js'
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
			spec: ['test/**/*.ts'],
                        require: ['ts-node/register']
    },
    maxConcurrentTestRunners: 2
  });
};
