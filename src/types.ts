import React from 'react';

export interface Service {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  details: string[];
  benefits: string[];
  image: string;
}
