package s3

import (
	"errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/request"
	"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3iface"
)

var (
	// MockObjectBody represents a sample body to be uploaded
	MockObjectBody = []byte("some content in file")
	// ForceUploadMockFail is variable to force mock response failure
	ForceUploadMockFail = false
	// ErrFailure is error when ForceMockFail is set to true
	ErrFailure = errors.New("forced failure response")
)

// InitS3Mock Begins S3 mock
func InitS3Mock() {
	Client = &mockS3{}
	ForceUploadMockFail = false
}

type mockS3 struct {
	s3iface.S3API
}

func (m *mockS3) PutObjectWithContext(ctx aws.Context, object *s3.PutObjectInput, opt ...request.Option) (*s3.PutObjectOutput, error) {
	if ForceUploadMockFail {
		return nil, ErrFailure
	}

	return &s3.PutObjectOutput{}, nil
}
