# YouTuber Subscriber Management API

The YouTuber Subscriber Management API is a backend solution for managing subscriber data for a YouTuber's channel. It includes endpoints to fetch all subscribers, retrieve subscriber names and subscribed channels, and obtain details for a specific subscriber by ID.


## Getting Started

To set up and run the project locally, follow the instructions below.

### Prerequisites

- Node.js
- MongoDB (with a valid connection string)


## API Endpoints
- Fetch All Subscribers
   - Endpoint: /subscriber
   - Method: GET
   - Description: Retrieve details of all subscribers in the database.
- Fetch Subscriber Names
   - Endpoint: /subscriber/name
   - Method: GET
   - Description: Retrieve names and subscribed channels of all subscribers.
- Fetch Subscriber by ID
   - Endpoint: /subscriber/:id
   - Method: GET
   - Description: Retrieve details of a specific subscriber using their unique ID.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   cd your-project
   npm install

2. Set up environment variables:

Create a .env file in the project root and add the following:
PORT=3000
MONGO_URL=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database

Replace the MongoDB connection URL with your own credentials.
Seed the database:

Run the script to populate the database with sample data:
node your-script.js
      

##  Usage
1. Start the server:

npm start

2. Test the API endpoints using Postman or any other API testing tool.