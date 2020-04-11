import React from 'react';
import { Redirect } from 'react-router-dom';

export const isUserLoggedIn = (user) => {
    if (!!user) {
        return <Redirect to="/messages"/>
    };
}