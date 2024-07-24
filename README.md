

Bankist Frontend Project
Overview
Bankist is a minimalist banking web application that allows users to manage their accounts efficiently. The application includes features such as user login, money transfer between accounts, loan requests based on previous deposits, and account removal. This project showcases a simple and intuitive user interface, enhancing the user experience in handling financial transactions.

Features
1. User Login
The application provides a secure login feature where users can log into their accounts using a username and PIN. Upon successful login, the user is greeted with a welcome message, and their account interface becomes visible. This ensures that only authenticated users can access account-specific features and data.

2. Money Transfer
Users can transfer money between accounts within the application. They need to specify the recipient's account and the amount to transfer. The application validates the transfer details to ensure the amount is positive, the recipient exists, and the sender has sufficient funds. If the validation passes, the transfer is processed, and the updated balances are displayed.

3. Loan Requests
The loan request feature allows users to request loans based on their previous deposits. The application checks if any of the user's previous deposits meet the eligibility criteria, such as being at least 10% of the requested loan amount. If eligible, the loan amount is credited to the user's account, reflecting the new balance.

4. Account Removal
Users have the option to close their accounts. To do so, they must provide their username and PIN for confirmation. Once confirmed, the account is removed from the system, and the user interface updates to reflect that the account has been closed.

5. Sorting Movements
The application includes a feature to sort account movements (transactions) either in ascending or descending order. This helps users to easily analyze their transaction history by providing a clear and organized view of their deposits and withdrawals.

6. Updating UI
After every transaction, whether it's a transfer, loan, or account closure, the user interface is updated to reflect the latest account data. This includes displaying recent transactions, updating the current balance, and summarizing the account's financial activity.
7. Implementing Time obejcts
The web site has timer for 5 mins so that if the user doesnt do any transaction they will get logged out also I implemented real time clock for the website that gets refreshed each second to show the real time  

Technical Details
This project demonstrates a high level of knowledge in HTML, CSS, and vanilla JavaScript. It includes the use of complicated array and object methods, as well as DOM manipulation techniques to create a responsive and interactive banking application. Key JavaScript functionalities showcased in this project include:

Array methods such as map, filter, reduce, and sort for handling and processing account movements.
Object manipulation to manage account data and user credentials.
Event handling to respond to user interactions, such as logging in, transferring money, requesting loans, and closing accounts.
Dynamic DOM manipulation to update the user interface in real-time based on user actions and account data.
This project not only highlights core banking functionalities but also demonstrates advanced programming skills in creating a user-friendly and efficient web application.

You can use the these login and passwords provided to experience the functionality of different features of the website :
-----------------------------------------
Account 1 Login: js      Pin: 1111

Account 2 Login: jd      Pin: 2222

Account 3 Login: stw      Pin: 3333

Account 4 Login: ss       Pin: 4444 

-----------------------------------------

Demo: 
![Screenshot 2024-07-03 190126](https://github.com/arkh99/Bankist-project/assets/124736009/bd01a43f-0ada-462c-9f44-0b12776b13f9)


![Screenshot 2024-07-03 190158](https://github.com/arkh99/Bankist-project/assets/124736009/83cce02d-8fb4-4aad-af50-7805ff4d30e7)


![Screenshot 2024-07-03 190211](https://github.com/arkh99/Bankist-project/assets/124736009/86a9f9f5-65c0-4ca7-9ea9-5987c742cee9)

Flowchart for the project : 

![Bankist-flowchart](https://github.com/arkh99/Bankist-project/assets/124736009/6276b868-2841-469f-8e15-504f6dd6e707)
