import React from 'react';

const Blog = () => {
  return (
    <div className='container mt-5 mb-5'>
      <h1 className='mb-4'>Question</h1>
      <h5>1. Difference between authorization and authentication</h5>
      <p>Ans: So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
      In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
      <p>Authentication</p>
      <p>Authentication verifies who the user is. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authentication is the first step of a good identity and access management process. Authentication is visible to and partially changeable by the user. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>
      <p>Authorization</p>
      <p>Authorization determines what resources a user can access. Authorization works through settings that are implemented and maintained by the organization. Authorization always takes place after authentication. Authorization isn’t visible to or changeable by the user.  Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>
      <hr />
      <h5>1. Why are you using firebase? What other options do you have to implement authentication?</h5>
      <p>Ans: Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. ackend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
      <hr />
      <h5>1. What other services does firebase provide other than authentication</h5>
      <p>Ans: Firebase Crashlytics is a lightweight, realtime crash reporter that makes it easy for you to manage stability issues in your app. Crashlytics saves you troubleshooting time by intelligently grouping crashes and highlighting the circumstances that lead up to them.. This guide describes how to integrate Crashlytics into your Android Studio project so that you can log ad response IDs.Crashlytics. The issue with Firebase Crashlytics has been resolved for all affected users, and all crashes are now being ...</p>
    </div>
  );
};

export default Blog;