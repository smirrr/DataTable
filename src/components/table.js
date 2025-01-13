import React from 'react';

// Example JSON with both columns and data
const tabledata =

{
    "columns": [
        { "name": "Employee Name", "sortable": true },
        { "name": "Employee ID", "sortable": true },
        { "name": "Department", "sortable": true },
        { "name": "Age", "sortable": true },
        { "name": "Salary", "sortable": true },
        { "name": "Hire Date", "sortable": true },
        { "name": "Location", "sortable": true },
        { "name": "Manager", "sortable": true },
        { "name": "Performance Rating", "sortable": true },
        { "name": "Gender", "sortable": true },
        { "name": "Total Attrition", "sortable": true },
        { "name": "Address", "sortable": false },
        { "name": "Email", "sortable": false }
    ],
    "data": [
        { "Employee Name": "John Doe", "Employee ID": 1, "Department": "IT", "Age": 29, "Salary": 75000, "Hire Date": "2020-01-15", "Location": "New York", "Manager": "Michael Smith", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 5.2, "Address": "123 Main Street, NY", "Email": "john.doe@example.com" },
        { "Employee Name": "Jane Smith", "Employee ID": 2, "Department": "HR", "Age": 34, "Salary": 67000, "Hire Date": "2018-05-21", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 3.8, "Address": "456 Oak Drive, Chicago", "Email": "jane.smith@example.com" },
        { "Employee Name": "Alice Johnson", "Employee ID": 3, "Department": "Finance", "Age": 45, "Salary": 90000, "Hire Date": "2015-08-11", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 7.1, "Address": "789 Pine Road, SF", "Email": "alice.johnson@example.com" },
        { "Employee Name": "Bob White", "Employee ID": 4, "Department": "Marketing", "Age": 28, "Salary": 72000, "Hire Date": "2022-04-01", "Location": "Boston", "Manager": "Emma Davis", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 2.3, "Address": "101 Maple Lane, Boston", "Email": "bob.white@example.com" },
        { "Employee Name": "Charlie Green", "Employee ID": 5, "Department": "Sales", "Age": 38, "Salary": 85000, "Hire Date": "2017-02-14", "Location": "Los Angeles", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.6, "Address": "202 Cedar Avenue, LA", "Email": "charlie.green@example.com" },
        { "Employee Name": "David Black", "Employee ID": 6, "Department": "Legal", "Age": 33, "Salary": 78000, "Hire Date": "2016-10-12", "Location": "Seattle", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 1.5, "Address": "303 Birch Street, Seattle", "Email": "david.black@example.com" },
        { "Employee Name": "Emily Blue", "Employee ID": 7, "Department": "Finance", "Age": 27, "Salary": 68000, "Hire Date": "2021-11-20", "Location": "Chicago", "Manager": "Michael Green", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.1, "Address": "404 Cedar Street, Chicago", "Email": "emily.blue@example.com" },
        { "Employee Name": "Frank Red", "Employee ID": 8, "Department": "IT", "Age": 41, "Salary": 95000, "Hire Date": "2014-05-03", "Location": "New York", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.0, "Address": "505 Cherry Road, NY", "Email": "frank.red@example.com" },
        { "Employee Name": "Grace Yellow", "Employee ID": 9, "Department": "HR", "Age": 36, "Salary": 73000, "Hire Date": "2019-09-15", "Location": "Boston", "Manager": "Liam Wilson", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 1.7, "Address": "606 Maple Avenue, Boston", "Email": "grace.yellow@example.com" },
        { "Employee Name": "Henry Purple", "Employee ID": 10, "Department": "Sales", "Age": 32, "Salary": 88000, "Hire Date": "2016-01-23", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.0, "Address": "707 Pine Lane, SF", "Email": "henry.purple@example.com" },
        { "Employee Name": "Ivy White", "Employee ID": 11, "Department": "Finance", "Age": 26, "Salary": 76000, "Hire Date": "2020-12-15", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.4, "Address": "808 Elm Street, LA", "Email": "ivy.white@example.com" },
        { "Employee Name": "Jack Brown", "Employee ID": 12, "Department": "Marketing", "Age": 40, "Salary": 92000, "Hire Date": "2018-07-22", "Location": "Seattle", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.2, "Address": "909 Oak Road, Seattle", "Email": "jack.brown@example.com" },
        { "Employee Name": "Kathy Grey", "Employee ID": 13, "Department": "IT", "Age": 31, "Salary": 67000, "Hire Date": "2019-04-08", "Location": "Chicago", "Manager": "David Brown", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 2.5, "Address": "1010 Birch Avenue, Chicago", "Email": "kathy.grey@example.com" },
        { "Employee Name": "Leo Black", "Employee ID": 14, "Department": "Sales", "Age": 37, "Salary": 80000, "Hire Date": "2017-03-15", "Location": "Los Angeles", "Manager": "Liam Wilson", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 2.8, "Address": "1111 Cedar Lane, LA", "Email": "leo.black@example.com" },
        { "Employee Name": "Mona Orange", "Employee ID": 15, "Department": "HR", "Age": 43, "Salary": 85000, "Hire Date": "2015-10-09", "Location": "Boston", "Manager": "Michael Green", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 3.6, "Address": "1212 Elm Street, Boston", "Email": "mona.orange@example.com" },
        { "Employee Name": "Nancy Pink", "Employee ID": 16, "Department": "Legal", "Age": 34, "Salary": 78000, "Hire Date": "2020-06-11", "Location": "Seattle", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 1.5, "Address": "1313 Maple Road, Seattle", "Email": "nancy.pink@example.com" },
        { "Employee Name": "Oscar Violet", "Employee ID": 17, "Department": "Sales", "Age": 30, "Salary": 77000, "Hire Date": "2019-11-02", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 4.2, "Address": "1414 Pine Lane, SF", "Email": "oscar.violet@example.com" },
        { "Employee Name": "Paul Blue", "Employee ID": 18, "Department": "IT", "Age": 27, "Salary": 71000, "Hire Date": "2021-05-05", "Location": "New York", "Manager": "Michael Smith", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.0, "Address": "1515 Oak Avenue, NY", "Email": "paul.blue@example.com" },
        { "Employee Name": "Quincy Green", "Employee ID": 19, "Department": "Marketing", "Age": 39, "Salary": 93000, "Hire Date": "2018-03-12", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 2.7, "Address": "1616 Birch Street, Chicago", "Email": "quincy.green@example.com" },
        { "Employee Name": "Rachel Red", "Employee ID": 20, "Department": "Finance", "Age": 32, "Salary": 80000, "Hire Date": "2016-08-23", "Location": "Boston", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 4.1, "Address": "1717 Cedar Road, Boston", "Email": "rachel.red@example.com" },
        { "Employee Name": "Sam Yellow", "Employee ID": 21, "Department": "HR", "Age": 28, "Salary": 66000, "Hire Date": "2017-02-14", "Location": "Seattle", "Manager": "Michael Green", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 1.8, "Address": "1818 Oak Street, Seattle", "Email": "sam.yellow@example.com" },
        { "Employee Name": "Tina White", "Employee ID": 22, "Department": "Sales", "Age": 41, "Salary": 88000, "Hire Date": "2015-12-10", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 3.3, "Address": "1919 Pine Road, SF", "Email": "tina.white@example.com" },
        { "Employee Name": "Ursula Purple", "Employee ID": 23, "Department": "Legal", "Age": 35, "Salary": 85000, "Hire Date": "2014-07-25", "Location": "Chicago", "Manager": "Sarah Lee", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.0, "Address": "2020 Maple Avenue, Chicago", "Email": "ursula.purple@example.com" },
        { "Employee Name": "Victor Black", "Employee ID": 24, "Department": "Marketing", "Age": 29, "Salary": 75000, "Hire Date": "2022-04-17", "Location": "Seattle", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.9, "Address": "2121 Elm Street, Seattle", "Email": "victor.black@example.com" },
        { "Employee Name": "Wendy Blue", "Employee ID": 25, "Department": "IT", "Age": 33, "Salary": 71000, "Hire Date": "2019-08-01", "Location": "New York", "Manager": "David Brown", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 2.6, "Address": "2222 Cedar Lane, NY", "Email": "wendy.blue@example.com" },
        { "Employee Name": "Xander Green", "Employee ID": 26, "Department": "Sales", "Age": 37, "Salary": 82000, "Hire Date": "2020-09-22", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 4.3, "Address": "2323 Birch Street, SF", "Email": "xander.green@example.com" },
        { "Employee Name": "Yvonne White", "Employee ID": 27, "Department": "Finance", "Age": 25, "Salary": 67000, "Hire Date": "2021-06-30", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 3.7, "Address": "2424 Oak Road, LA", "Email": "yvonne.white@example.com" },
        { "Employee Name": "Zachary Yellow", "Employee ID": 28, "Department": "Marketing", "Age": 32, "Salary": 83000, "Hire Date": "2015-12-05", "Location": "Boston", "Manager": "Michael Green", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 1.9, "Address": "2525 Pine Road, Boston", "Email": "zachary.yellow@example.com" },
        { "Employee Name": "Beverly Brown", "Employee ID": 30, "Department": "IT", "Age": 32, "Salary": 81000, "Hire Date": "2017-11-11", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 3.7, "Address": "2727 Oak Avenue, LA", "Email": "beverly.brown@example.com" },
    { "Employee Name": "Cameron Green", "Employee ID": 31, "Department": "Marketing", "Age": 27, "Salary": 67000, "Hire Date": "2020-02-22", "Location": "New York", "Manager": "Emma Davis", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 2.6, "Address": "2828 Pine Road, NY", "Email": "cameron.green@example.com" },
    { "Employee Name": "Daniel White", "Employee ID": 32, "Department": "Sales", "Age": 41, "Salary": 92000, "Hire Date": "2018-12-13", "Location": "Chicago", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.1, "Address": "2929 Maple Lane, Chicago", "Email": "daniel.white@example.com" },
    { "Employee Name": "Ella Black", "Employee ID": 33, "Department": "Legal", "Age": 29, "Salary": 77000, "Hire Date": "2019-01-29", "Location": "San Francisco", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 1.9, "Address": "3030 Birch Street, SF", "Email": "ella.black@example.com" },
    { "Employee Name": "Felix Red", "Employee ID": 34, "Department": "HR", "Age": 35, "Salary": 85000, "Hire Date": "2021-04-19", "Location": "Los Angeles", "Manager": "Sophie Turner", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 2.5, "Address": "3131 Cedar Road, LA", "Email": "felix.red@example.com" },
    { "Employee Name": "Gina Green", "Employee ID": 35, "Department": "Sales", "Age": 38, "Salary": 82000, "Hire Date": "2016-06-03", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.8, "Address": "3232 Oak Avenue, SF", "Email": "gina.green@example.com" },
    { "Employee Name": "Henry White", "Employee ID": 36, "Department": "Marketing", "Age": 40, "Salary": 88000, "Hire Date": "2015-12-14", "Location": "Seattle", "Manager": "Liam Wilson", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.9, "Address": "3333 Pine Road, Seattle", "Email": "henry.white@example.com" },
    { "Employee Name": "Iris Blue", "Employee ID": 37, "Department": "Finance", "Age": 33, "Salary": 83000, "Hire Date": "2017-07-02", "Location": "New York", "Manager": "David Brown", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 3.1, "Address": "3434 Oak Street, NY", "Email": "iris.blue@example.com" },
    { "Employee Name": "Jack Green", "Employee ID": 38, "Department": "IT", "Age": 34, "Salary": 79000, "Hire Date": "2019-03-10", "Location": "Chicago", "Manager": "Michael Green", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.0, "Address": "3535 Cedar Lane, Chicago", "Email": "jack.green@example.com" },
    { "Employee Name": "Kathy Pink", "Employee ID": 39, "Department": "HR", "Age": 41, "Salary": 82000, "Hire Date": "2020-02-02", "Location": "Seattle", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.7, "Address": "3636 Maple Road, Seattle", "Email": "kathy.pink@example.com" },
    { "Employee Name": "Liam Red", "Employee ID": 40, "Department": "Sales", "Age": 39, "Salary": 90000, "Hire Date": "2021-08-12", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.5, "Address": "3737 Oak Avenue, SF", "Email": "liam.red@example.com" },
    { "Employee Name": "Monica Blue", "Employee ID": 41, "Department": "Marketing", "Age": 42, "Salary": 94000, "Hire Date": "2014-06-18", "Location": "Los Angeles", "Manager": "Emma Davis", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.0, "Address": "3838 Pine Street, LA", "Email": "monica.blue@example.com" },
    { "Employee Name": "Nathan Black", "Employee ID": 42, "Department": "IT", "Age": 29, "Salary": 71000, "Hire Date": "2020-03-30", "Location": "New York", "Manager": "Michael Smith", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.5, "Address": "3939 Maple Avenue, NY", "Email": "nathan.black@example.com" },
    { "Employee Name": "Olivia Green", "Employee ID": 43, "Department": "HR", "Age": 37, "Salary": 76000, "Hire Date": "2019-07-24", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 3.4, "Address": "4040 Birch Street, Chicago", "Email": "olivia.green@example.com" },
    { "Employee Name": "Peter White", "Employee ID": 44, "Department": "Sales", "Age": 34, "Salary": 87000, "Hire Date": "2021-12-05", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.8, "Address": "4141 Oak Road, SF", "Email": "peter.white@example.com" },
    { "Employee Name": "Quincy Black", "Employee ID": 45, "Department": "Finance", "Age": 38, "Salary": 85000, "Hire Date": "2016-02-11", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 3.2, "Address": "4242 Pine Lane, LA", "Email": "quincy.black@example.com" },
    { "Employee Name": "Rachel Green", "Employee ID": 46, "Department": "Marketing", "Age": 30, "Salary": 78000, "Hire Date": "2019-10-20", "Location": "New York", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.9, "Address": "4343 Birch Avenue, NY", "Email": "rachel.green@example.com" },
    { "Employee Name": "Steve Red", "Employee ID": 47, "Department": "Sales", "Age": 33, "Salary": 80000, "Hire Date": "2017-09-10", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 2.6, "Address": "4444 Cedar Street, SF", "Email": "steve.red@example.com" },
    { "Employee Name": "Tina Black", "Employee ID": 48, "Department": "IT", "Age": 35, "Salary": 83000, "Hire Date": "2019-11-17", "Location": "Los Angeles", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.3, "Address": "4545 Oak Avenue, LA", "Email": "tina.black@example.com" },
    { "Employee Name": "Ursula Red", "Employee ID": 49, "Department": "HR", "Age": 29, "Salary": 72000, "Hire Date": "2020-01-08", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.2, "Address": "4646 Pine Lane, Chicago", "Email": "ursula.red@example.com" },
    { "Employee Name": "Victor White", "Employee ID": 50, "Department": "Sales", "Age": 36, "Salary": 85000, "Hire Date": "2018-09-15", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 2.8, "Address": "4747 Cedar Road, SF", "Email": "victor.white@example.com" },
        { "Employee Name": "Beverly Brown", "Employee ID": 30, "Department": "IT", "Age": 32, "Salary": 81000, "Hire Date": "2017-11-11", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 3.7, "Address": "2727 Oak Avenue, LA", "Email": "beverly.brown@example.com" },
        { "Employee Name": "Cameron Green", "Employee ID": 31, "Department": "Marketing", "Age": 27, "Salary": 67000, "Hire Date": "2020-02-22", "Location": "New York", "Manager": "Emma Davis", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 2.6, "Address": "2828 Pine Road, NY", "Email": "cameron.green@example.com" },
        { "Employee Name": "Daniel White", "Employee ID": 32, "Department": "Sales", "Age": 41, "Salary": 92000, "Hire Date": "2018-12-13", "Location": "Chicago", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.1, "Address": "2929 Maple Lane, Chicago", "Email": "daniel.white@example.com" },
        { "Employee Name": "Ella Black", "Employee ID": 33, "Department": "Legal", "Age": 29, "Salary": 77000, "Hire Date": "2019-01-29", "Location": "San Francisco", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 1.9, "Address": "3030 Birch Street, SF", "Email": "ella.black@example.com" },
        { "Employee Name": "Felix Red", "Employee ID": 34, "Department": "HR", "Age": 35, "Salary": 85000, "Hire Date": "2021-04-19", "Location": "Los Angeles", "Manager": "Sophie Turner", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 2.5, "Address": "3131 Cedar Road, LA", "Email": "felix.red@example.com" },
        { "Employee Name": "Gina Green", "Employee ID": 35, "Department": "Sales", "Age": 38, "Salary": 82000, "Hire Date": "2016-06-03", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.8, "Address": "3232 Oak Avenue, SF", "Email": "gina.green@example.com" },
        { "Employee Name": "Henry White", "Employee ID": 36, "Department": "Marketing", "Age": 40, "Salary": 88000, "Hire Date": "2015-12-14", "Location": "Seattle", "Manager": "Liam Wilson", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.9, "Address": "3333 Pine Road, Seattle", "Email": "henry.white@example.com" },
        { "Employee Name": "Iris Blue", "Employee ID": 37, "Department": "Finance", "Age": 33, "Salary": 83000, "Hire Date": "2017-07-02", "Location": "New York", "Manager": "David Brown", "Performance Rating": 5, "Gender": "Female", "Total Attrition": 3.1, "Address": "3434 Oak Street, NY", "Email": "iris.blue@example.com" },
        { "Employee Name": "Jack Green", "Employee ID": 38, "Department": "IT", "Age": 34, "Salary": 79000, "Hire Date": "2019-03-10", "Location": "Chicago", "Manager": "Michael Green", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.0, "Address": "3535 Cedar Lane, Chicago", "Email": "jack.green@example.com" },
        { "Employee Name": "Kathy Pink", "Employee ID": 39, "Department": "HR", "Age": 41, "Salary": 82000, "Hire Date": "2020-02-02", "Location": "Seattle", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.7, "Address": "3636 Maple Road, Seattle", "Email": "kathy.pink@example.com" },
        { "Employee Name": "Liam Red", "Employee ID": 40, "Department": "Sales", "Age": 39, "Salary": 90000, "Hire Date": "2021-08-12", "Location": "San Francisco", "Manager": "David Brown", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 4.5, "Address": "3737 Oak Avenue, SF", "Email": "liam.red@example.com" },
        { "Employee Name": "Monica Blue", "Employee ID": 41, "Department": "Marketing", "Age": 42, "Salary": 94000, "Hire Date": "2014-06-18", "Location": "Los Angeles", "Manager": "Emma Davis", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.0, "Address": "3838 Pine Street, LA", "Email": "monica.blue@example.com" },
        { "Employee Name": "Nathan Black", "Employee ID": 42, "Department": "IT", "Age": 29, "Salary": 71000, "Hire Date": "2020-03-30", "Location": "New York", "Manager": "Michael Smith", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.5, "Address": "3939 Maple Avenue, NY", "Email": "nathan.black@example.com" },
        { "Employee Name": "Olivia Green", "Employee ID": 43, "Department": "HR", "Age": 37, "Salary": 76000, "Hire Date": "2019-07-24", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 3, "Gender": "Female", "Total Attrition": 3.4, "Address": "4040 Birch Street, Chicago", "Email": "olivia.green@example.com" },
        { "Employee Name": "Peter White", "Employee ID": 44, "Department": "Sales", "Age": 34, "Salary": 87000, "Hire Date": "2021-12-05", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 4, "Gender": "Male", "Total Attrition": 3.8, "Address": "4141 Oak Road, SF", "Email": "peter.white@example.com" },
        { "Employee Name": "Quincy Black", "Employee ID": 45, "Department": "Finance", "Age": 38, "Salary": 85000, "Hire Date": "2016-02-11", "Location": "Los Angeles", "Manager": "Sarah Lee", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 3.2, "Address": "4242 Pine Lane, LA", "Email": "quincy.black@example.com" },
        { "Employee Name": "Rachel Green", "Employee ID": 46, "Department": "Marketing", "Age": 30, "Salary": 78000, "Hire Date": "2019-10-20", "Location": "New York", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.9, "Address": "4343 Birch Avenue, NY", "Email": "rachel.green@example.com" },
        { "Employee Name": "Steve Red", "Employee ID": 47, "Department": "Sales", "Age": 33, "Salary": 80000, "Hire Date": "2017-09-10", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 5, "Gender": "Male", "Total Attrition": 2.6, "Address": "4444 Cedar Street, SF", "Email": "steve.red@example.com" },
        { "Employee Name": "Tina Black", "Employee ID": 48, "Department": "IT", "Age": 35, "Salary": 83000, "Hire Date": "2019-11-17", "Location": "Los Angeles", "Manager": "David Brown", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.3, "Address": "4545 Oak Avenue, LA", "Email": "tina.black@example.com" },
        { "Employee Name": "Ursula Red", "Employee ID": 49, "Department": "HR", "Age": 29, "Salary": 72000, "Hire Date": "2020-01-08", "Location": "Chicago", "Manager": "Sophie Turner", "Performance Rating": 4, "Gender": "Female", "Total Attrition": 2.2, "Address": "4646 Pine Lane, Chicago", "Email": "ursula.red@example.com" },
        { "Employee Name": "Victor White", "Employee ID": 50, "Department": "Sales", "Age": 36, "Salary": 85000, "Hire Date": "2018-09-15", "Location": "San Francisco", "Manager": "Liam Wilson", "Performance Rating": 3, "Gender": "Male", "Total Attrition": 2.8, "Address": "4747 Cedar Road, SF", "Email": "victor.white@example.com" }
    ]
};


const DataTable = () => {
    const columns = tabledata.columns;
    const data = tabledata.data;

    return (
        <>
            <h2>Employee Table</h2>
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                <table border="1" cellPadding="8" style={{ tableLayout: 'auto', width: '100%' }}>
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    style={{
                                        minWidth: '130px',
                                        padding: '5px',
                                        position: index === 0 ? 'sticky' : 'static', // Sticky for first column
                                        left: index === 0 ? 0 : 'auto', // Keep first column aligned
                                        background: index === 0 ? '#fff' : 'transparent', // Prevent overlap of content
                                        zIndex: index === 0 ? 1 : 'auto' // Ensure first column stays on top
                                    }}
                                >
                                    {col.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        style={{
                                            minWidth: '130px',
                                            padding: '5px',
                                            position: colIndex === 0 ? 'sticky' : 'static', // Sticky for first column
                                            left: colIndex === 0 ? 0 : 'auto', // Keep first column aligned
                                            background: colIndex === 0 ? '#fff' : 'transparent', // Prevent overlap of content
                                            zIndex: colIndex === 0 ? 1 : 'auto' // Ensure first column stays on top
                                        }}
                                    >
                                        {row[col.name] !== undefined ? row[col.name] : ''}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};




export default DataTable;
