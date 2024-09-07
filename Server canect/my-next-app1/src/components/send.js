'use server'
import { resolve } from "styled-jsx/css";

// components/send.js
const send = async ({ message }) => {
    // Simulate a network request
    console.log('Sending message:', message);
    await new Promise(resolve => setTimeout(resolve, 10000))

};

export default send;
