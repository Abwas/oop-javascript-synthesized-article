test:
	./node_modules/mocha/bin/mocha --compilers js:babel/register ./test/**/* --reporter spec

test-travis:
	./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- --compilers js:babel/register -R spec ./test/**/*

.PHONY: test test-travis
