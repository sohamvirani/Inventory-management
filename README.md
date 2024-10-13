<h1 align="center">MERN Backend Inventory Management System</h1>

## Features

- Perform CRUD operations for managing inventory and suppliers.
- Export bulk data to CSV format for your projects.
- Import bulk data from CSV files.

### API Endpoints

#### Inventory Endpoints

- **Add a New Inventory Item**
  - `POST /api/inventory`
  - Request Body: `{ name: String, description: String, quantity: Number, price: Number, supplier: ObjectId }`

- **Retrieve All Inventory Items**
  - `GET /api/inventory`

- **Fetch an Inventory Item by ID**
  - `GET /api/inventory/:id`

- **Modify an Existing Inventory Item**
  - `PUT /api/inventory/:id`
  - Request Body: `{ name: String, description: String, quantity: Number, price: Number, supplier: ObjectId }`

- **Remove an Inventory Item**
  - `DELETE /api/inventory/:id`

- **Download Inventory Data as CSV**
  - `GET /api/inventory/export`

- **Upload Inventory Data from a CSV File**
  - `POST /api/inventory/import`
  - Content-Type: `multipart/form-data`
  - Body: File upload

#### Supplier Endpoints

- **Add a New Supplier**
  - `POST /api/suppliers`
  - Request Body: `{ name: String, contact: String, address: String }`

- **Retrieve All Suppliers**
  - `GET /api/suppliers`

- **Fetch a Supplier by ID**
  - `GET /api/suppliers/:id`

- **Update Supplier Information**
  - `PUT /api/suppliers/:id`
  - Request Body: `{ name: String, contact: String, address: String }`

- **Delete a Supplier**
  - `DELETE /api/suppliers/:id`

### Setting Up the .env File

MONGO_URL=Your_mongo_database_url
PORT=Service_port


### Running the Application Locally

npm run build


### Starting the Application

npm start
