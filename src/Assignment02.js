import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

const Assignment02 = () => {
  const employyeData = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "designation": "Software Engineer",
      "salary": 70000,
      "phone_number": "123-456-7890",
      "experience": 3
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "designation": "Senior Developer",
      "salary": 90000,
      "phone_number": "234-567-8901",
      "experience": 5
    },
    {
      "id": 3,
      "name": "Charlie Davis",
      "designation": "Project Manager",
      "salary": 105000,
      "phone_number": "345-678-9012",
      "experience": 8
    },
    {
      "id": 4,
      "name": "Diana Prince",
      "designation": "UI/UX Designer",
      "salary": 65000,
      "phone_number": "456-789-0123",
      "experience": 4
    },
    {
      "id": 5,
      "name": "Ethan Hunt",
      "designation": "DevOps Engineer",
      "salary": 85000,
      "phone_number": "567-890-1234",
      "experience": 6
    },
    {
      "id": 6,
      "name": "Fiona Glenanne",
      "designation": "QA Engineer",
      "salary": 60000,
      "phone_number": "678-901-2345",
      "experience": 2
    },
    {
      "id": 7,
      "name": "George Mason",
      "designation": "Data Scientist",
      "salary": 95000,
      "phone_number": "789-012-3456",
      "experience": 5
    },
    {
      "id": 8,
      "name": "Hannah Wells",
      "designation": "Product Manager",
      "salary": 100000,
      "phone_number": "890-123-4567",
      "experience": 7
    },
    {
      "id": 9,
      "name": "Ian Fleming",
      "designation": "Backend Developer",
      "salary": 75000,
      "phone_number": "901-234-5678",
      "experience": 4
    },
    {
      "id": 10,
      "name": "Jane Doe",
      "designation": "Frontend Developer",
      "salary": 72000,
      "phone_number": "012-345-6789",
      "experience": 3
    },
    {
      "id": 11,
      "name": "Kyle Reese",
      "designation": "Full Stack Developer",
      "salary": 95000,
      "phone_number": "123-456-7891",
      "experience": 6
    },
    {
      "id": 12,
      "name": "Lara Croft",
      "designation": "Scrum Master",
      "salary": 85000,
      "phone_number": "234-567-8902",
      "experience": 5
    },
    {
      "id": 13,
      "name": "Michael Scott",
      "designation": "Business Analyst",
      "salary": 80000,
      "phone_number": "345-678-9013",
      "experience": 4
    },
    {
      "id": 14,
      "name": "Nina Sharp",
      "designation": "Systems Architect",
      "salary": 110000,
      "phone_number": "456-789-0124",
      "experience": 9
    },
    {
      "id": 15,
      "name": "Oliver Queen",
      "designation": "Security Specialist",
      "salary": 87000,
      "phone_number": "567-890-1235",
      "experience": 7
    },
    {
      "id": 16,
      "name": "Peter Parker",
      "designation": "Intern",
      "salary": 40000,
      "phone_number": "678-901-2346",
      "experience": 1
    },
    {
      "id": 17,
      "name": "Quincy Adams",
      "designation": "Technical Lead",
      "salary": 98000,
      "phone_number": "789-012-3457",
      "experience": 6
    },
    {
      "id": 18,
      "name": "Rachel Green",
      "designation": "Customer Support",
      "salary": 55000,
      "phone_number": "890-123-4568",
      "experience": 2
    },
    {
      "id": 19,
      "name": "Steve Rogers",
      "designation": "HR Manager",
      "salary": 78000,
      "phone_number": "901-234-5679",
      "experience": 5
    },
    {
      "id": 20,
      "name": "Tina Armstrong",
      "designation": "Marketing Specialist",
      "salary": 70000,
      "phone_number": "012-345-6790",
      "experience": 3
    }
  ]
  

  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <h1 className="m-5">Employee Table </h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Phone Number</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
              {employyeData.map((item, index) => (
                <tr>
                    <td key={item.id}>{item.id} </td>
                    <td key={item.id}>{item.name} </td>
                    <td key={item.id}>{item.designation} </td>
                    <td key={item.id}>{item.salary} </td>
                    <td key={item.id}>{item.phone_number} </td>
                    <td key={item.id}>{item.experience} </td>
                </tr>
              ))}
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Assignment02;
