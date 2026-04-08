import swaggerJsdoc from "swagger-jsdoc";
import type { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "ResQBite Backend API",
      version: "1.0.0",
      description:
        "Production-ready API documentation for ResQBite, a surplus food marketplace platform. This specification covers authentication flows, request validation rules, bearer token usage, and standard response formats.",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development",
      },
      {
        url: "/",
        description: "Current deployed environment",
      },
    ],
    tags: [
      {
        name: "Auth",
        description:
          "Authentication endpoints for account registration and login.",
      },
      {
        name: "Listing",
        description: "Listing management endpoints.",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description:
            "Provide the JWT access token in the Authorization header as: Bearer <token>",
        },
      },
      schemas: {
        Role: {
          type: "string",
          enum: ["BUYER", "SELLER", "NGO"],
          example: "BUYER",
          description: "Role assigned to a user account.",
        },
        User: {
          type: "object",
          required: ["id", "name", "email", "role", "createdAt", "updatedAt"],
          properties: {
            id: {
              type: "string",
              example: "67f59ab2c91f78c5a0f3e1a1",
              description: "MongoDB ObjectId of the user.",
            },
            name: {
              type: "string",
              example: "Amit Sharma",
            },
            email: {
              type: "string",
              format: "email",
              example: "amit@example.com",
            },
            phone: {
              type: "string",
              nullable: true,
              example: "+919876543210",
            },
            role: {
              $ref: "#/components/schemas/Role",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-09T09:15:00.000Z",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              example: "2026-04-09T09:15:00.000Z",
            },
          },
        },
        RegisterRequest: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              minLength: 2,
              example: "Amit Sharma",
            },
            email: {
              type: "string",
              format: "email",
              example: "amit@example.com",
            },
            password: {
              type: "string",
              minLength: 8,
              format: "password",
              example: "StrongPass123",
            },
            role: {
              $ref: "#/components/schemas/Role",
            },
          },
        },
        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "amit@example.com",
            },
            password: {
              type: "string",
              minLength: 8,
              format: "password",
              example: "StrongPass123",
            },
          },
        },
        AuthPayload: {
          type: "object",
          required: ["user", "token"],
          properties: {
            user: {
              $ref: "#/components/schemas/User",
            },
            token: {
              type: "string",
              example:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.signature",
              description: "Signed JWT access token.",
            },
          },
        },
        AuthSuccessResponse: {
          type: "object",
          required: ["success", "data", "message"],
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            data: {
              $ref: "#/components/schemas/AuthPayload",
            },
            message: {
              type: "string",
              example: "Login successfully",
            },
          },
        },
        ValidationErrorResponse: {
          type: "object",
          required: ["success", "message"],
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Validation failed",
            },
            errors: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  field: {
                    type: "string",
                    example: "email",
                  },
                  message: {
                    type: "string",
                    example: "Invalid email address",
                  },
                },
              },
            },
          },
        },
        ErrorResponse: {
          type: "object",
          required: ["success", "message"],
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Invalid credentials",
            },
          },
        },
      },
      responses: {
        BadRequest: {
          description: "Request payload failed validation.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationErrorResponse",
              },
            },
          },
        },
        Unauthorized: {
          description: "Authentication failed due to invalid credentials or token.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        Conflict: {
          description: "Resource conflict, such as an email already being registered.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        InternalServerError: {
          description: "Unexpected server-side error.",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
    paths: {
      "/api/auth/register": {
        post: {
          tags: ["Auth"],
          summary: "Register a new user",
          description:
            "Creates a new user account, hashes the password, and returns a JWT access token with the created user profile.",
          operationId: "registerUser",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RegisterRequest",
                },
                examples: {
                  buyer: {
                    summary: "Register a buyer account",
                    value: {
                      name: "Amit Sharma",
                      email: "amit@example.com",
                      password: "StrongPass123",
                      role: "BUYER",
                    },
                  },
                  seller: {
                    summary: "Register a seller account",
                    value: {
                      name: "Fresh Foods Store",
                      email: "seller@example.com",
                      password: "StrongPass123",
                      role: "SELLER",
                    },
                  },
                },
              },
            },
          },
          responses: {
            "201": {
              description: "User registered successfully.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/AuthSuccessResponse",
                  },
                  examples: {
                    success: {
                      value: {
                        success: true,
                        data: {
                          user: {
                            id: "67f59ab2c91f78c5a0f3e1a1",
                            name: "Amit Sharma",
                            email: "amit@example.com",
                            phone: null,
                            role: "BUYER",
                            createdAt: "2026-04-09T09:15:00.000Z",
                            updatedAt: "2026-04-09T09:15:00.000Z",
                          },
                          token:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.signature",
                        },
                        message: "User registered successfully",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              $ref: "#/components/responses/BadRequest",
            },
            "409": {
              $ref: "#/components/responses/Conflict",
            },
            "500": {
              $ref: "#/components/responses/InternalServerError",
            },
          },
        },
      },
      "/api/auth/login": {
        post: {
          tags: ["Auth"],
          summary: "Authenticate an existing user",
          description:
            "Validates the user email and password, then returns the user profile and a signed JWT access token.",
          operationId: "loginUser",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginRequest",
                },
                example: {
                  email: "amit@example.com",
                  password: "StrongPass123",
                },
              },
            },
          },
          responses: {
            "200": {
              description: "User logged in successfully.",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/AuthSuccessResponse",
                  },
                  examples: {
                    success: {
                      value: {
                        success: true,
                        data: {
                          user: {
                            id: "67f59ab2c91f78c5a0f3e1a1",
                            name: "Amit Sharma",
                            email: "amit@example.com",
                            phone: null,
                            role: "BUYER",
                            createdAt: "2026-04-09T09:15:00.000Z",
                            updatedAt: "2026-04-09T09:15:00.000Z",
                          },
                          token:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.example.signature",
                        },
                        message: "Login successfully",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              $ref: "#/components/responses/BadRequest",
            },
            "401": {
              $ref: "#/components/responses/Unauthorized",
            },
            "500": {
              $ref: "#/components/responses/InternalServerError",
            },
          },
        },
      },
    },
  },
  apis: ["./src/modules/**/*.routes.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
