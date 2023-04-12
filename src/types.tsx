import React = require('react');

export type ErrorType = {
  title: string;
  message: string;
};

export type newsType = {
  id: string;
  title: string;
  summery: string;
  description: string;
  image: string;
  date: Date;
};

export type ButtonType = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset';
};

export type NewsFilterType = {
  onFilter: (keyword) => void;
};
