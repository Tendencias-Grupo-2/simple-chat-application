package s3

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestUploadObject(t *testing.T) {
	c := require.New(t)

	InitS3Mock()

	err := UploadObject(context.Background(), "test", "test/path", MockObjectBody)

	c.Nil(err)

	ForceUploadMockFail = true

	err = UploadObject(context.Background(), "test", "test/path", MockObjectBody)

	c.Error(err)
}
