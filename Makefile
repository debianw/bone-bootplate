# commands
COMPONENTC = ./node_modules/.bin/component

# source
SRC = $(wildcard lib/*/*.js)
HTML = $(wildcard lib/*/*.html)
TEMPLATES = $(HTML:.html=.js)

# build all
build: components $(TEMPLATES) $(SRC)
	$(COMPONENTC) build

# install components
components: component.json
	$(COMPONENTC) install

# convert templates
%.js: %.html
	$(COMPONENTC) convert $<

# clean
clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean print