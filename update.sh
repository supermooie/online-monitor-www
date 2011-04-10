#!/bin/bash

#paz -m -Z "100 200" files/process.rf

export PGPLOT_PNG_WIDTH=800
export PGPLOT_PNG_HEIGHT=600

pav -GTp files/process.rf -g test.png/png

