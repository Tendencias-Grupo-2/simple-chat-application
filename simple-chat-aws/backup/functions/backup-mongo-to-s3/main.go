package main

import (
	"context"
	mongo "simple-chat-aws/mongodb"

	"simple-chat-aws/shared/apigateway"
	"simple-chat-aws/shared/environment"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

var (
	mongoUsername = environment.GetString("MONGODB_USERNAME", "user")
	mongoPassword = environment.GetString("MONGODB_PASSWORD", "pass")
	mongoServer   = environment.GetString("MONGODB_SERVER", "server")
)

func apiGatewayHandler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	client, err := mongo.NewClient(mongoUsername, mongoPassword, mongoServer)

	if err != nil {
		return apigateway.NewErrorResponse(400, err), nil
	}

	err = client.Backup()

	if err != nil {
		return apigateway.NewErrorResponse(500, err), nil
	}

	return apigateway.NewJSONResponse(200, nil), nil
}

func main() {
	lambda.Start(apiGatewayHandler)
}
