import handler from "../src/index"; // Adjust path as needed
import { VercelRequest, VercelResponse } from "@vercel/node";
import { PrismaClient } from "@prisma/client";

// Mock Prisma Client
jest.mock("@prisma/client", () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    movie: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  })),
}));

const prisma = new PrismaClient();

describe("API Handler", () => {
  let mockRequest: Partial<VercelRequest>;
  let mockResponse: Partial<VercelResponse>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      setHeader: jest.fn(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return a welcome message on the root route", async () => {
    mockRequest.url = "/";
    await handler(mockRequest as VercelRequest, mockResponse as VercelResponse);

    expect(mockResponse.send).toHaveBeenCalledWith(
      "Welcome to the Movie Recommendation API!"
    );
  });

});