package main

import (
	"context"
	"fmt"
	"io/ioutil"
	mongo "simple-chat-aws/mongodb"
	"simple-chat-aws/s3"
	"time"

	"simple-chat-aws/shared/apigateway"
	"simple-chat-aws/shared/environment"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

const (
	backupPath = "/tmp"
)

var (
	mongoUsername = environment.GetString("MONGODB_USERNAME", "user")
	mongoPassword = environment.GetString("MONGODB_PASSWORD", "pass")
	mongoServer   = environment.GetString("MONGODB_SERVER", "server")

	backupFileName = environment.GetString("BACKUP_FILENAME", "backup.gz")

	awsBucketName = environment.GetString("BUCKET_NAME", "")
)

func apiGatewayHandler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	client, err := mongo.NewClient(mongoUsername, mongoPassword, mongoServer)
	if err != nil {
		return apigateway.NewErrorResponse(400, err), nil
	}

	err = client.Backup(backupFileName, backupPath)
	if err != nil {
		return apigateway.NewErrorResponse(500, err), nil
	}

	f, err := ioutil.ReadFile(fmt.Sprintf("%s/%s", backupPath, backupFileName))
	if err != nil {
		return apigateway.NewErrorResponse(500, err), nil
	}

	currentTime := time.Now()
	fileName := fmt.Sprintf("%s-%s", currentTime.Format("2006-01-02"), backupFileName)

	err = s3.UploadObject(ctx, awsBucketName, fileName, f)
	if err != nil {
		return apigateway.NewErrorResponse(500, err), nil
	}

	return apigateway.NewJSONResponse(204, nil), nil
}

func main() {
	lambda.Start(apiGatewayHandler)
}
