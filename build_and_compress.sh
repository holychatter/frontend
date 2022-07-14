#!/bin/sh

yarn build
rm build.zip
zip -r build.zip build
