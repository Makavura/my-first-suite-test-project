module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    tsconfigFile: "tsconfig.json",
    mutate: ["test/**/*.ts"],
    mochaOptions: {
			spec: ['test/**/*.ts'],
                        require: ['ts-node/register']
		},
  });
};
