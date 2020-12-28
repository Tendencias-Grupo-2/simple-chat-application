package mongo

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"os"
	"os/exec"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Client is the struct habndler for mongodb related operations
type Client struct {
	Client           *mongo.Client
	ConnectionString string
}

// NewClient returns a new client connection instance
func NewClient(username, password, serverName string) (*Client, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	connectionStr := fmt.Sprintf("mongodb+srv://%s:%s@%s.xshpz.mongodb.net/", username, password, serverName)

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(
		connectionStr,
	))

	if err != nil {
		return nil, err
	}

	return &Client{
		Client:           client,
		ConnectionString: connectionStr,
	}, err
}

// Backup backups all the tables to a file
func (cl *Client) Backup() error {

	cmd := exec.Command("./mongodump", "--archive=-", "--uri="+cl.ConnectionString)

	// open the out file for writing
	outfile, err := os.Create("/tmp/backup.gz")
	if err != nil {
		panic(err)
	}

	var errOutput bytes.Buffer
	cmd.Stdout = outfile
	cmd.Stderr = &errOutput

	err = cmd.Run()
	if err != nil {
		return errors.New(errOutput.String())
	}

	return err
}
