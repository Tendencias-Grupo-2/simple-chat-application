#!/bin/bash 
go test ./... -coverprofile cover.out 

PERCENT=$(go tool cover -func cover.out | grep total | awk '{print substr($3, 1, length($3)-1)}')

echo "Total coverage: $PERCENT%"

if (( $(echo "$PERCENT < $1" |bc -l) ));
then 
    echo "Coverage doesn't meet minimun of $1%";
    exit 1
else
    exit 0
fi;