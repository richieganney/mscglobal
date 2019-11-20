#!/bin/bash

pid=$(npm start 2>&1)
echo "This is my pid ${pid}"
