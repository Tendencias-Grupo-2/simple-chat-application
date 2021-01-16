package apigateway

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestNewErrorResponseKnownError(t *testing.T) {
	c := require.New(t)

	response := NewErrorResponse(404, errors.New("resource not found"))
	c.Equal(404, response.StatusCode)
	c.JSONEq(`{"http_code":404,"message":"resource not found"}`, response.Body)
}

func TestNewJSONResponse(t *testing.T) {
	c := require.New(t)
	response := NewJSONResponse(200, map[string]string{"hello": "world"})

	c.Equal(200, response.StatusCode)
	c.Equal("application/json", response.Headers["Content-Type"])
	c.JSONEq(`{"hello":"world"}`, response.Body)
}

func TestLogAndReturnError(t *testing.T) {
	c := require.New(t)
	sampleError := errors.New("a sample error")

	response := LogAndReturnError(sampleError)
	c.Equal(500, response.StatusCode)
	c.Equal("application/json", response.Headers["Content-Type"])
	c.JSONEq(`{"http_code": 500, "message":"a sample error"}`, response.Body)
}
