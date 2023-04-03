import * as React from 'react';
import MainNavigation from '../components/mainNavigation';
import { useRouteError } from 'react-router-dom';
import { ErrorType } from '../src/types';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  let errorBody: ErrorType = { title: '404', message: 'Page is not found!!' };
  if (error.status === 500) errorBody.title = '500';
  errorBody.message = 'Somethins went wrong!!';

  return (
    <React.Fragment>
      <MainNavigation />
      <h1>{errorBody.title}</h1>
      <p>{errorBody.message}</p>
    </React.Fragment>
  );
};

export default ErrorPage;
